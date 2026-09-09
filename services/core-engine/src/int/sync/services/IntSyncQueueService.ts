import { IntSyncQueueModel, IntSyncQueueValidator } from "@nexora/types/domains/int/sync/IntSyncQueue";

export class IntSyncQueueService {
  private repository = new Map<string, IntSyncQueueModel>();

  public create(data: Omit<IntSyncQueueModel, "id" | "version" | "createdAt" | "updatedAt">): IntSyncQueueModel {
    const id = "int__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: IntSyncQueueModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = IntSyncQueueValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for IntSyncQueue: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): IntSyncQueueModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: IntSyncQueueModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<IntSyncQueueModel>): IntSyncQueueModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: IntSyncQueueModel = {
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
