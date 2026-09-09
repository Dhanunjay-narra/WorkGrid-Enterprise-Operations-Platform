import { CommNotificationsThresholdModel, CommNotificationsThresholdValidator } from "@nexora/types/domains/comm/notifications/CommNotificationsThreshold";

export class CommNotificationsThresholdService {
  private repository = new Map<string, CommNotificationsThresholdModel>();

  public create(data: Omit<CommNotificationsThresholdModel, "id" | "version" | "createdAt" | "updatedAt">): CommNotificationsThresholdModel {
    const id = "comm_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: CommNotificationsThresholdModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = CommNotificationsThresholdValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for CommNotificationsThreshold: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): CommNotificationsThresholdModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: CommNotificationsThresholdModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<CommNotificationsThresholdModel>): CommNotificationsThresholdModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: CommNotificationsThresholdModel = {
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
