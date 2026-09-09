import { InventoryStockScheduleModel, InventoryStockScheduleValidator } from "@nexora/types/domains/inventory/stock/InventoryStockSchedule";

export class InventoryStockScheduleService {
  private repository = new Map<string, InventoryStockScheduleModel>();

  public create(data: Omit<InventoryStockScheduleModel, "id" | "version" | "createdAt" | "updatedAt">): InventoryStockScheduleModel {
    const id = "inve_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: InventoryStockScheduleModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = InventoryStockScheduleValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for InventoryStockSchedule: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): InventoryStockScheduleModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: InventoryStockScheduleModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<InventoryStockScheduleModel>): InventoryStockScheduleModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: InventoryStockScheduleModel = {
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
