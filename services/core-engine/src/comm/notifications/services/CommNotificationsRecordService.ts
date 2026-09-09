import { CommNotificationsRecordModel, CommNotificationsRecordValidator } from "@nexora/types/domains/comm/notifications/CommNotificationsRecord";

export class CommNotificationsRecordService {
  private repository = new Map<string, CommNotificationsRecordModel>();

  public create(data: Omit<CommNotificationsRecordModel, "id" | "version" | "createdAt" | "updatedAt">): CommNotificationsRecordModel {
    const id = "comm_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: CommNotificationsRecordModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = CommNotificationsRecordValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for CommNotificationsRecord: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): CommNotificationsRecordModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: CommNotificationsRecordModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<CommNotificationsRecordModel>): CommNotificationsRecordModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: CommNotificationsRecordModel = {
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
