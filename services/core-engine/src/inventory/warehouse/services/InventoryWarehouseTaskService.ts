import { InventoryWarehouseTaskModel, InventoryWarehouseTaskValidator } from "@nexora/types/domains/inventory/warehouse/InventoryWarehouseTask";

export class InventoryWarehouseTaskService {
  private repository = new Map<string, InventoryWarehouseTaskModel>();

  public create(data: Omit<InventoryWarehouseTaskModel, "id" | "version" | "createdAt" | "updatedAt">): InventoryWarehouseTaskModel {
    const id = "inve_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: InventoryWarehouseTaskModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = InventoryWarehouseTaskValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for InventoryWarehouseTask: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): InventoryWarehouseTaskModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: InventoryWarehouseTaskModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<InventoryWarehouseTaskModel>): InventoryWarehouseTaskModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: InventoryWarehouseTaskModel = {
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
