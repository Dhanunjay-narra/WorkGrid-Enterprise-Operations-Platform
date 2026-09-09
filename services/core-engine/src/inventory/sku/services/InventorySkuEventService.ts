import { InventorySkuEventModel, InventorySkuEventValidator } from "@nexora/types/domains/inventory/sku/InventorySkuEvent";

export class InventorySkuEventService {
  private repository = new Map<string, InventorySkuEventModel>();

  public create(data: Omit<InventorySkuEventModel, "id" | "version" | "createdAt" | "updatedAt">): InventorySkuEventModel {
    const id = "inve_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: InventorySkuEventModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = InventorySkuEventValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for InventorySkuEvent: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): InventorySkuEventModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: InventorySkuEventModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<InventorySkuEventModel>): InventorySkuEventModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: InventorySkuEventModel = {
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
