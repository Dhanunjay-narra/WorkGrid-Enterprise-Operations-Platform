import { IntSyncQueueItemData, IntSyncQueueItemValidator } from "../../../../packages/types/src/domains/integrations/IntSyncQueueItem";

export class IntSyncQueueItemService {
  private repository = new Map<string, IntSyncQueueItemData>();

  public create(data: Omit<IntSyncQueueItemData, "id" | "createdAt" | "updatedAt">): IntSyncQueueItemData {
    const id = "int_" + Math.random().toString(36).substring(2, 9);
    const now = new Date().toISOString();
    const item: IntSyncQueueItemData = {
      ...data,
      id,
      createdAt: now,
      updatedAt: now
    };
    const validation = IntSyncQueueItemValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for IntSyncQueueItem: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): IntSyncQueueItemData | undefined {
    return this.repository.get(id);
  }

  public listByTenant(tenantId: string): IntSyncQueueItemData[] {
    return Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
  }

  public update(id: string, updates: Partial<IntSyncQueueItemData>): IntSyncQueueItemData | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: IntSyncQueueItemData = { ...existing, ...updates, updatedAt: new Date().toISOString() };
    this.repository.set(id, updated);
    return updated;
  }

  public delete(id: string): boolean {
    return this.repository.delete(id);
  }
}
