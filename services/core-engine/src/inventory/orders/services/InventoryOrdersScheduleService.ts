import { InventoryOrdersScheduleModel, InventoryOrdersScheduleValidator } from "@nexora/types/domains/inventory/orders/InventoryOrdersSchedule";

export class InventoryOrdersScheduleService {
  private repository = new Map<string, InventoryOrdersScheduleModel>();

  public create(data: Omit<InventoryOrdersScheduleModel, "id" | "version" | "createdAt" | "updatedAt">): InventoryOrdersScheduleModel {
    const id = "inve_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: InventoryOrdersScheduleModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = InventoryOrdersScheduleValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for InventoryOrdersSchedule: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): InventoryOrdersScheduleModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: InventoryOrdersScheduleModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<InventoryOrdersScheduleModel>): InventoryOrdersScheduleModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: InventoryOrdersScheduleModel = {
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
