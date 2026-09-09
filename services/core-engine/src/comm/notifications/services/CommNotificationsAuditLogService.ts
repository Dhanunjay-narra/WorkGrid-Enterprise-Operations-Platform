import { CommNotificationsAuditLogModel, CommNotificationsAuditLogValidator } from "@nexora/types/domains/comm/notifications/CommNotificationsAuditLog";

export class CommNotificationsAuditLogService {
  private repository = new Map<string, CommNotificationsAuditLogModel>();

  public create(data: Omit<CommNotificationsAuditLogModel, "id" | "version" | "createdAt" | "updatedAt">): CommNotificationsAuditLogModel {
    const id = "comm_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: CommNotificationsAuditLogModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = CommNotificationsAuditLogValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for CommNotificationsAuditLog: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): CommNotificationsAuditLogModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: CommNotificationsAuditLogModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<CommNotificationsAuditLogModel>): CommNotificationsAuditLogModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: CommNotificationsAuditLogModel = {
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
