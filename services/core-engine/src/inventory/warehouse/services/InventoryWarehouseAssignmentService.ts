import { InventoryWarehouseAssignmentModel, InventoryWarehouseAssignmentValidator } from "@nexora/types/domains/inventory/warehouse/InventoryWarehouseAssignment";

export class InventoryWarehouseAssignmentService {
  private repository = new Map<string, InventoryWarehouseAssignmentModel>();

  public create(data: Omit<InventoryWarehouseAssignmentModel, "id" | "version" | "createdAt" | "updatedAt">): InventoryWarehouseAssignmentModel {
    const id = "inve_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: InventoryWarehouseAssignmentModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = InventoryWarehouseAssignmentValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for InventoryWarehouseAssignment: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): InventoryWarehouseAssignmentModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: InventoryWarehouseAssignmentModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<InventoryWarehouseAssignmentModel>): InventoryWarehouseAssignmentModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: InventoryWarehouseAssignmentModel = {
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
