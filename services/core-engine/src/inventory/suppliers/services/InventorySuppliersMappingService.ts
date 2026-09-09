import { InventorySuppliersMappingModel, InventorySuppliersMappingValidator } from "@nexora/types/domains/inventory/suppliers/InventorySuppliersMapping";

export class InventorySuppliersMappingService {
  private repository = new Map<string, InventorySuppliersMappingModel>();

  public create(data: Omit<InventorySuppliersMappingModel, "id" | "version" | "createdAt" | "updatedAt">): InventorySuppliersMappingModel {
    const id = "inve_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: InventorySuppliersMappingModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = InventorySuppliersMappingValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for InventorySuppliersMapping: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): InventorySuppliersMappingModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: InventorySuppliersMappingModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<InventorySuppliersMappingModel>): InventorySuppliersMappingModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: InventorySuppliersMappingModel = {
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
