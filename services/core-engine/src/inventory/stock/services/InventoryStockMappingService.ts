import { InventoryStockMappingModel, InventoryStockMappingValidator } from "@nexora/types/domains/inventory/stock/InventoryStockMapping";

export class InventoryStockMappingService {
  private repository = new Map<string, InventoryStockMappingModel>();

  public create(data: Omit<InventoryStockMappingModel, "id" | "version" | "createdAt" | "updatedAt">): InventoryStockMappingModel {
    const id = "inve_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: InventoryStockMappingModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = InventoryStockMappingValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for InventoryStockMapping: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): InventoryStockMappingModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: InventoryStockMappingModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<InventoryStockMappingModel>): InventoryStockMappingModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: InventoryStockMappingModel = {
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
