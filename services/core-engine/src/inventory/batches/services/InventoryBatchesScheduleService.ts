import { InventoryBatchesScheduleModel, InventoryBatchesScheduleValidator } from "@nexora/types/domains/inventory/batches/InventoryBatchesSchedule";

export class InventoryBatchesScheduleService {
  private repository = new Map<string, InventoryBatchesScheduleModel>();

  public create(data: Omit<InventoryBatchesScheduleModel, "id" | "version" | "createdAt" | "updatedAt">): InventoryBatchesScheduleModel {
    const id = "inve_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: InventoryBatchesScheduleModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = InventoryBatchesScheduleValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for InventoryBatchesSchedule: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): InventoryBatchesScheduleModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: InventoryBatchesScheduleModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<InventoryBatchesScheduleModel>): InventoryBatchesScheduleModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: InventoryBatchesScheduleModel = {
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
