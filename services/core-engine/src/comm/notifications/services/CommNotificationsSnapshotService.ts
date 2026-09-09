import { CommNotificationsSnapshotModel, CommNotificationsSnapshotValidator } from "@nexora/types/domains/comm/notifications/CommNotificationsSnapshot";

export class CommNotificationsSnapshotService {
  private repository = new Map<string, CommNotificationsSnapshotModel>();

  public create(data: Omit<CommNotificationsSnapshotModel, "id" | "version" | "createdAt" | "updatedAt">): CommNotificationsSnapshotModel {
    const id = "comm_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: CommNotificationsSnapshotModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = CommNotificationsSnapshotValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for CommNotificationsSnapshot: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): CommNotificationsSnapshotModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: CommNotificationsSnapshotModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<CommNotificationsSnapshotModel>): CommNotificationsSnapshotModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: CommNotificationsSnapshotModel = {
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
