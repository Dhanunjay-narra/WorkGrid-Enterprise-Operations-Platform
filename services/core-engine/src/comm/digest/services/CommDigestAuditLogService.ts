import { CommDigestAuditLogModel, CommDigestAuditLogValidator } from "@nexora/types/domains/comm/digest/CommDigestAuditLog";

export class CommDigestAuditLogService {
  private repository = new Map<string, CommDigestAuditLogModel>();

  public create(data: Omit<CommDigestAuditLogModel, "id" | "version" | "createdAt" | "updatedAt">): CommDigestAuditLogModel {
    const id = "comm_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: CommDigestAuditLogModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = CommDigestAuditLogValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for CommDigestAuditLog: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): CommDigestAuditLogModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: CommDigestAuditLogModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<CommDigestAuditLogModel>): CommDigestAuditLogModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: CommDigestAuditLogModel = {
      ...existing,
      ...updates,
      version: existing.version + 1,
      updatedAt: new Date().toISOString()
    };
    this.repository.set(id, updated);
    return updated;
  }

  public remove(id: string): boolean {
    return this.repository.delete(id);
  }
}
