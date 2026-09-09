import { InventoryWarehouseScheduleModel, InventoryWarehouseScheduleValidator } from "@nexora/types/domains/inventory/warehouse/InventoryWarehouseSchedule";

export class InventoryWarehouseScheduleService {
  private repository = new Map<string, InventoryWarehouseScheduleModel>();

  public create(data: Omit<InventoryWarehouseScheduleModel, "id" | "version" | "createdAt" | "updatedAt">): InventoryWarehouseScheduleModel {
    const id = "inve_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: InventoryWarehouseScheduleModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = InventoryWarehouseScheduleValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for InventoryWarehouseSchedule: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): InventoryWarehouseScheduleModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: InventoryWarehouseScheduleModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<InventoryWarehouseScheduleModel>): InventoryWarehouseScheduleModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: InventoryWarehouseScheduleModel = {
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
