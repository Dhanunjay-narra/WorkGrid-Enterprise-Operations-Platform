import { CommNotificationsItemModel, CommNotificationsItemValidator } from "@nexora/types/domains/comm/notifications/CommNotificationsItem";

export class CommNotificationsItemService {
  private repository = new Map<string, CommNotificationsItemModel>();

  public create(data: Omit<CommNotificationsItemModel, "id" | "version" | "createdAt" | "updatedAt">): CommNotificationsItemModel {
    const id = "comm_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: CommNotificationsItemModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = CommNotificationsItemValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for CommNotificationsItem: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): CommNotificationsItemModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: CommNotificationsItemModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<CommNotificationsItemModel>): CommNotificationsItemModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: CommNotificationsItemModel = {
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
