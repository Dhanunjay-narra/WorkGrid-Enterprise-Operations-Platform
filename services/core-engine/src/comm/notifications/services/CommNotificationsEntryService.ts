import { CommNotificationsEntryModel, CommNotificationsEntryValidator } from "@nexora/types/domains/comm/notifications/CommNotificationsEntry";

export class CommNotificationsEntryService {
  private repository = new Map<string, CommNotificationsEntryModel>();

  public create(data: Omit<CommNotificationsEntryModel, "id" | "version" | "createdAt" | "updatedAt">): CommNotificationsEntryModel {
    const id = "comm_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: CommNotificationsEntryModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = CommNotificationsEntryValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for CommNotificationsEntry: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): CommNotificationsEntryModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: CommNotificationsEntryModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<CommNotificationsEntryModel>): CommNotificationsEntryModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: CommNotificationsEntryModel = {
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
