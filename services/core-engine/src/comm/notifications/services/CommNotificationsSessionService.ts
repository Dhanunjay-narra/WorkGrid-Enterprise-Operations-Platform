import { CommNotificationsSessionModel, CommNotificationsSessionValidator } from "@nexora/types/domains/comm/notifications/CommNotificationsSession";

export class CommNotificationsSessionService {
  private repository = new Map<string, CommNotificationsSessionModel>();

  public create(data: Omit<CommNotificationsSessionModel, "id" | "version" | "createdAt" | "updatedAt">): CommNotificationsSessionModel {
    const id = "comm_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: CommNotificationsSessionModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = CommNotificationsSessionValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for CommNotificationsSession: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): CommNotificationsSessionModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: CommNotificationsSessionModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<CommNotificationsSessionModel>): CommNotificationsSessionModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: CommNotificationsSessionModel = {
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
