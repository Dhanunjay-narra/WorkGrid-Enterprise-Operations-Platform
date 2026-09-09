import { InventoryStockBatchModel, InventoryStockBatchValidator } from "@nexora/types/domains/inventory/stock/InventoryStockBatch";

export class InventoryStockBatchService {
  private repository = new Map<string, InventoryStockBatchModel>();

  public create(data: Omit<InventoryStockBatchModel, "id" | "version" | "createdAt" | "updatedAt">): InventoryStockBatchModel {
    const id = "inve_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: InventoryStockBatchModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = InventoryStockBatchValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for InventoryStockBatch: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): InventoryStockBatchModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: InventoryStockBatchModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<InventoryStockBatchModel>): InventoryStockBatchModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: InventoryStockBatchModel = {
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
