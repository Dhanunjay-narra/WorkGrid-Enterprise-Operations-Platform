import { InventorySuppliersItemModel, InventorySuppliersItemValidator } from "@nexora/types/domains/inventory/suppliers/InventorySuppliersItem";

export class InventorySuppliersItemService {
  private repository = new Map<string, InventorySuppliersItemModel>();

  public create(data: Omit<InventorySuppliersItemModel, "id" | "version" | "createdAt" | "updatedAt">): InventorySuppliersItemModel {
    const id = "inve_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: InventorySuppliersItemModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = InventorySuppliersItemValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for InventorySuppliersItem: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): InventorySuppliersItemModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: InventorySuppliersItemModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<InventorySuppliersItemModel>): InventorySuppliersItemModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: InventorySuppliersItemModel = {
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
