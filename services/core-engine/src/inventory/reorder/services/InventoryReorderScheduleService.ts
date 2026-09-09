import { InventoryReorderScheduleModel, InventoryReorderScheduleValidator } from "@nexora/types/domains/inventory/reorder/InventoryReorderSchedule";

export class InventoryReorderScheduleService {
  private repository = new Map<string, InventoryReorderScheduleModel>();

  public create(data: Omit<InventoryReorderScheduleModel, "id" | "version" | "createdAt" | "updatedAt">): InventoryReorderScheduleModel {
    const id = "inve_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: InventoryReorderScheduleModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = InventoryReorderScheduleValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for InventoryReorderSchedule: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): InventoryReorderScheduleModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: InventoryReorderScheduleModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<InventoryReorderScheduleModel>): InventoryReorderScheduleModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: InventoryReorderScheduleModel = {
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
