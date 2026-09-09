import { CommNotificationsStateModel, CommNotificationsStateValidator } from "@nexora/types/domains/comm/notifications/CommNotificationsState";

export class CommNotificationsStateService {
  private repository = new Map<string, CommNotificationsStateModel>();

  public create(data: Omit<CommNotificationsStateModel, "id" | "version" | "createdAt" | "updatedAt">): CommNotificationsStateModel {
    const id = "comm_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: CommNotificationsStateModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = CommNotificationsStateValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for CommNotificationsState: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): CommNotificationsStateModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: CommNotificationsStateModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<CommNotificationsStateModel>): CommNotificationsStateModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: CommNotificationsStateModel = {
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
