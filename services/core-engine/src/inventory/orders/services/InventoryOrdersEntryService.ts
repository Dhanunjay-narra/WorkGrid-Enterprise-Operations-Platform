import { InventoryOrdersEntryModel, InventoryOrdersEntryValidator } from "@nexora/types/domains/inventory/orders/InventoryOrdersEntry";

export class InventoryOrdersEntryService {
  private repository = new Map<string, InventoryOrdersEntryModel>();

  public create(data: Omit<InventoryOrdersEntryModel, "id" | "version" | "createdAt" | "updatedAt">): InventoryOrdersEntryModel {
    const id = "inve_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: InventoryOrdersEntryModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = InventoryOrdersEntryValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for InventoryOrdersEntry: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): InventoryOrdersEntryModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: InventoryOrdersEntryModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<InventoryOrdersEntryModel>): InventoryOrdersEntryModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: InventoryOrdersEntryModel = {
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
