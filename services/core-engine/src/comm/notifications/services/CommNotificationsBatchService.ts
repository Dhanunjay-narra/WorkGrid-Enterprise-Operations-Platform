import { CommNotificationsBatchModel, CommNotificationsBatchValidator } from "@nexora/types/domains/comm/notifications/CommNotificationsBatch";

export class CommNotificationsBatchService {
  private repository = new Map<string, CommNotificationsBatchModel>();

  public create(data: Omit<CommNotificationsBatchModel, "id" | "version" | "createdAt" | "updatedAt">): CommNotificationsBatchModel {
    const id = "comm_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: CommNotificationsBatchModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = CommNotificationsBatchValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for CommNotificationsBatch: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): CommNotificationsBatchModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: CommNotificationsBatchModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<CommNotificationsBatchModel>): CommNotificationsBatchModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: CommNotificationsBatchModel = {
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
