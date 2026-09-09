import { CommCallsAuditLogModel, CommCallsAuditLogValidator } from "@nexora/types/domains/comm/calls/CommCallsAuditLog";

export class CommCallsAuditLogService {
  private repository = new Map<string, CommCallsAuditLogModel>();

  public create(data: Omit<CommCallsAuditLogModel, "id" | "version" | "createdAt" | "updatedAt">): CommCallsAuditLogModel {
    const id = "comm_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: CommCallsAuditLogModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = CommCallsAuditLogValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for CommCallsAuditLog: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): CommCallsAuditLogModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: CommCallsAuditLogModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<CommCallsAuditLogModel>): CommCallsAuditLogModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: CommCallsAuditLogModel = {
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
