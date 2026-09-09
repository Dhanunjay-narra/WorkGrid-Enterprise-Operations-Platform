import { InventorySkuQueueModel, InventorySkuQueueValidator } from "@nexora/types/domains/inventory/sku/InventorySkuQueue";

export class InventorySkuQueueService {
  private repository = new Map<string, InventorySkuQueueModel>();

  public create(data: Omit<InventorySkuQueueModel, "id" | "version" | "createdAt" | "updatedAt">): InventorySkuQueueModel {
    const id = "inve_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: InventorySkuQueueModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = InventorySkuQueueValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for InventorySkuQueue: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): InventorySkuQueueModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: InventorySkuQueueModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<InventorySkuQueueModel>): InventorySkuQueueModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: InventorySkuQueueModel = {
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
