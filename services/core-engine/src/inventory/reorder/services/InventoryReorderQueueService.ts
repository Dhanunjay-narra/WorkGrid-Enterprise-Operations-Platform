import { InventoryReorderQueueModel, InventoryReorderQueueValidator } from "@nexora/types/domains/inventory/reorder/InventoryReorderQueue";

export class InventoryReorderQueueService {
  private repository = new Map<string, InventoryReorderQueueModel>();

  public create(data: Omit<InventoryReorderQueueModel, "id" | "version" | "createdAt" | "updatedAt">): InventoryReorderQueueModel {
    const id = "inve_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: InventoryReorderQueueModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = InventoryReorderQueueValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for InventoryReorderQueue: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): InventoryReorderQueueModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: InventoryReorderQueueModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<InventoryReorderQueueModel>): InventoryReorderQueueModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: InventoryReorderQueueModel = {
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
