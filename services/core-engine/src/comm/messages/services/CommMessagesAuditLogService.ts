import { CommMessagesAuditLogModel, CommMessagesAuditLogValidator } from "@nexora/types/domains/comm/messages/CommMessagesAuditLog";

export class CommMessagesAuditLogService {
  private repository = new Map<string, CommMessagesAuditLogModel>();

  public create(data: Omit<CommMessagesAuditLogModel, "id" | "version" | "createdAt" | "updatedAt">): CommMessagesAuditLogModel {
    const id = "comm_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: CommMessagesAuditLogModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = CommMessagesAuditLogValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for CommMessagesAuditLog: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): CommMessagesAuditLogModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: CommMessagesAuditLogModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<CommMessagesAuditLogModel>): CommMessagesAuditLogModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: CommMessagesAuditLogModel = {
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
