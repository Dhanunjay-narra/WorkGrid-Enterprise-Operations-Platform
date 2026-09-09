import { InventoryBatchesQueueModel, InventoryBatchesQueueValidator } from "@nexora/types/domains/inventory/batches/InventoryBatchesQueue";

export class InventoryBatchesQueueService {
  private repository = new Map<string, InventoryBatchesQueueModel>();

  public create(data: Omit<InventoryBatchesQueueModel, "id" | "version" | "createdAt" | "updatedAt">): InventoryBatchesQueueModel {
    const id = "inve_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: InventoryBatchesQueueModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = InventoryBatchesQueueValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for InventoryBatchesQueue: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): InventoryBatchesQueueModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: InventoryBatchesQueueModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<InventoryBatchesQueueModel>): InventoryBatchesQueueModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: InventoryBatchesQueueModel = {
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
