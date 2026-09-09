import { InventoryStockQueueModel, InventoryStockQueueValidator } from "@nexora/types/domains/inventory/stock/InventoryStockQueue";

export class InventoryStockQueueService {
  private repository = new Map<string, InventoryStockQueueModel>();

  public create(data: Omit<InventoryStockQueueModel, "id" | "version" | "createdAt" | "updatedAt">): InventoryStockQueueModel {
    const id = "inve_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: InventoryStockQueueModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = InventoryStockQueueValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for InventoryStockQueue: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): InventoryStockQueueModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: InventoryStockQueueModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<InventoryStockQueueModel>): InventoryStockQueueModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: InventoryStockQueueModel = {
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
