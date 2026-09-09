import { CommThreadsAuditLogModel, CommThreadsAuditLogValidator } from "@nexora/types/domains/comm/threads/CommThreadsAuditLog";

export class CommThreadsAuditLogService {
  private repository = new Map<string, CommThreadsAuditLogModel>();

  public create(data: Omit<CommThreadsAuditLogModel, "id" | "version" | "createdAt" | "updatedAt">): CommThreadsAuditLogModel {
    const id = "comm_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: CommThreadsAuditLogModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = CommThreadsAuditLogValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for CommThreadsAuditLog: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): CommThreadsAuditLogModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: CommThreadsAuditLogModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<CommThreadsAuditLogModel>): CommThreadsAuditLogModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: CommThreadsAuditLogModel = {
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
