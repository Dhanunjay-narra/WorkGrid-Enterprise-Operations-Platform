import { InventoryStockConfigModel, InventoryStockConfigValidator } from "@nexora/types/domains/inventory/stock/InventoryStockConfig";

export class InventoryStockConfigService {
  private repository = new Map<string, InventoryStockConfigModel>();

  public create(data: Omit<InventoryStockConfigModel, "id" | "version" | "createdAt" | "updatedAt">): InventoryStockConfigModel {
    const id = "inve_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: InventoryStockConfigModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = InventoryStockConfigValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for InventoryStockConfig: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): InventoryStockConfigModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: InventoryStockConfigModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<InventoryStockConfigModel>): InventoryStockConfigModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: InventoryStockConfigModel = {
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
