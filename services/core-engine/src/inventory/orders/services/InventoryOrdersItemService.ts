import { InventoryOrdersItemModel, InventoryOrdersItemValidator } from "@nexora/types/domains/inventory/orders/InventoryOrdersItem";

export class InventoryOrdersItemService {
  private repository = new Map<string, InventoryOrdersItemModel>();

  public create(data: Omit<InventoryOrdersItemModel, "id" | "version" | "createdAt" | "updatedAt">): InventoryOrdersItemModel {
    const id = "inve_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: InventoryOrdersItemModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = InventoryOrdersItemValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for InventoryOrdersItem: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): InventoryOrdersItemModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: InventoryOrdersItemModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<InventoryOrdersItemModel>): InventoryOrdersItemModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: InventoryOrdersItemModel = {
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
