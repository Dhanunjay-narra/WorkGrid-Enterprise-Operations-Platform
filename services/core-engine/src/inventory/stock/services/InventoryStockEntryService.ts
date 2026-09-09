import { InventoryStockEntryModel, InventoryStockEntryValidator } from "@nexora/types/domains/inventory/stock/InventoryStockEntry";

export class InventoryStockEntryService {
  private repository = new Map<string, InventoryStockEntryModel>();

  public create(data: Omit<InventoryStockEntryModel, "id" | "version" | "createdAt" | "updatedAt">): InventoryStockEntryModel {
    const id = "inve_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: InventoryStockEntryModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = InventoryStockEntryValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for InventoryStockEntry: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): InventoryStockEntryModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: InventoryStockEntryModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<InventoryStockEntryModel>): InventoryStockEntryModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: InventoryStockEntryModel = {
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
