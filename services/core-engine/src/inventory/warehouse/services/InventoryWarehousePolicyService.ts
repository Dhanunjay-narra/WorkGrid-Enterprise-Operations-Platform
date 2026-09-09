import { InventoryWarehousePolicyModel, InventoryWarehousePolicyValidator } from "@nexora/types/domains/inventory/warehouse/InventoryWarehousePolicy";

export class InventoryWarehousePolicyService {
  private repository = new Map<string, InventoryWarehousePolicyModel>();

  public create(data: Omit<InventoryWarehousePolicyModel, "id" | "version" | "createdAt" | "updatedAt">): InventoryWarehousePolicyModel {
    const id = "inve_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: InventoryWarehousePolicyModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = InventoryWarehousePolicyValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for InventoryWarehousePolicy: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): InventoryWarehousePolicyModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: InventoryWarehousePolicyModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<InventoryWarehousePolicyModel>): InventoryWarehousePolicyModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: InventoryWarehousePolicyModel = {
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
