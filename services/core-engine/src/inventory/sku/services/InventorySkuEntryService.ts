import { InventorySkuEntryModel, InventorySkuEntryValidator } from "@nexora/types/domains/inventory/sku/InventorySkuEntry";

export class InventorySkuEntryService {
  private repository = new Map<string, InventorySkuEntryModel>();

  public create(data: Omit<InventorySkuEntryModel, "id" | "version" | "createdAt" | "updatedAt">): InventorySkuEntryModel {
    const id = "inve_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: InventorySkuEntryModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = InventorySkuEntryValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for InventorySkuEntry: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): InventorySkuEntryModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: InventorySkuEntryModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<InventorySkuEntryModel>): InventorySkuEntryModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: InventorySkuEntryModel = {
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
