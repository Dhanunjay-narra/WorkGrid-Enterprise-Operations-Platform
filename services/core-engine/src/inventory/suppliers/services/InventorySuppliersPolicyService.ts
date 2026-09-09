import { InventorySuppliersPolicyModel, InventorySuppliersPolicyValidator } from "@nexora/types/domains/inventory/suppliers/InventorySuppliersPolicy";

export class InventorySuppliersPolicyService {
  private repository = new Map<string, InventorySuppliersPolicyModel>();

  public create(data: Omit<InventorySuppliersPolicyModel, "id" | "version" | "createdAt" | "updatedAt">): InventorySuppliersPolicyModel {
    const id = "inve_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: InventorySuppliersPolicyModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = InventorySuppliersPolicyValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for InventorySuppliersPolicy: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): InventorySuppliersPolicyModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: InventorySuppliersPolicyModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<InventorySuppliersPolicyModel>): InventorySuppliersPolicyModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: InventorySuppliersPolicyModel = {
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
