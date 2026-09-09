import { InventoryStockProfileModel, InventoryStockProfileValidator } from "@nexora/types/domains/inventory/stock/InventoryStockProfile";

export class InventoryStockProfileService {
  private repository = new Map<string, InventoryStockProfileModel>();

  public create(data: Omit<InventoryStockProfileModel, "id" | "version" | "createdAt" | "updatedAt">): InventoryStockProfileModel {
    const id = "inve_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: InventoryStockProfileModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = InventoryStockProfileValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for InventoryStockProfile: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): InventoryStockProfileModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: InventoryStockProfileModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<InventoryStockProfileModel>): InventoryStockProfileModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: InventoryStockProfileModel = {
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
