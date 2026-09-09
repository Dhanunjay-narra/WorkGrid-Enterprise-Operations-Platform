import { InventorySkuItemModel, InventorySkuItemValidator } from "@nexora/types/domains/inventory/sku/InventorySkuItem";

export class InventorySkuItemService {
  private repository = new Map<string, InventorySkuItemModel>();

  public create(data: Omit<InventorySkuItemModel, "id" | "version" | "createdAt" | "updatedAt">): InventorySkuItemModel {
    const id = "inve_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: InventorySkuItemModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = InventorySkuItemValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for InventorySkuItem: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): InventorySkuItemModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: InventorySkuItemModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<InventorySkuItemModel>): InventorySkuItemModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: InventorySkuItemModel = {
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
