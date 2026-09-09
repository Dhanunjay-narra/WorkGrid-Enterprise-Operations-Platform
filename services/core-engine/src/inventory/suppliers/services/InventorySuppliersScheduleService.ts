import { InventorySuppliersScheduleModel, InventorySuppliersScheduleValidator } from "@nexora/types/domains/inventory/suppliers/InventorySuppliersSchedule";

export class InventorySuppliersScheduleService {
  private repository = new Map<string, InventorySuppliersScheduleModel>();

  public create(data: Omit<InventorySuppliersScheduleModel, "id" | "version" | "createdAt" | "updatedAt">): InventorySuppliersScheduleModel {
    const id = "inve_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: InventorySuppliersScheduleModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = InventorySuppliersScheduleValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for InventorySuppliersSchedule: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): InventorySuppliersScheduleModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: InventorySuppliersScheduleModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<InventorySuppliersScheduleModel>): InventorySuppliersScheduleModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: InventorySuppliersScheduleModel = {
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
