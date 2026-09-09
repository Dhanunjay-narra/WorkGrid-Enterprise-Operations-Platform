import { InventorySkuScheduleModel, InventorySkuScheduleValidator } from "@nexora/types/domains/inventory/sku/InventorySkuSchedule";

export class InventorySkuScheduleService {
  private repository = new Map<string, InventorySkuScheduleModel>();

  public create(data: Omit<InventorySkuScheduleModel, "id" | "version" | "createdAt" | "updatedAt">): InventorySkuScheduleModel {
    const id = "inve_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: InventorySkuScheduleModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = InventorySkuScheduleValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for InventorySkuSchedule: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): InventorySkuScheduleModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: InventorySkuScheduleModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<InventorySkuScheduleModel>): InventorySkuScheduleModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: InventorySkuScheduleModel = {
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
