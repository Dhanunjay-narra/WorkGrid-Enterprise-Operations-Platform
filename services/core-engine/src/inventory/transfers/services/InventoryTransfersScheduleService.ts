import { InventoryTransfersScheduleModel, InventoryTransfersScheduleValidator } from "@nexora/types/domains/inventory/transfers/InventoryTransfersSchedule";

export class InventoryTransfersScheduleService {
  private repository = new Map<string, InventoryTransfersScheduleModel>();

  public create(data: Omit<InventoryTransfersScheduleModel, "id" | "version" | "createdAt" | "updatedAt">): InventoryTransfersScheduleModel {
    const id = "inve_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: InventoryTransfersScheduleModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = InventoryTransfersScheduleValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for InventoryTransfersSchedule: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): InventoryTransfersScheduleModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: InventoryTransfersScheduleModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<InventoryTransfersScheduleModel>): InventoryTransfersScheduleModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: InventoryTransfersScheduleModel = {
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
