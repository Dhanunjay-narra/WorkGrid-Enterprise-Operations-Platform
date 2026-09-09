import { InventorySkuBatchModel, InventorySkuBatchValidator } from "@nexora/types/domains/inventory/sku/InventorySkuBatch";

export class InventorySkuBatchService {
  private repository = new Map<string, InventorySkuBatchModel>();

  public create(data: Omit<InventorySkuBatchModel, "id" | "version" | "createdAt" | "updatedAt">): InventorySkuBatchModel {
    const id = "inve_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: InventorySkuBatchModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = InventorySkuBatchValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for InventorySkuBatch: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): InventorySkuBatchModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: InventorySkuBatchModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<InventorySkuBatchModel>): InventorySkuBatchModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: InventorySkuBatchModel = {
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
