import { HrShiftsScheduleModel, HrShiftsScheduleValidator } from "@nexora/types/domains/hr/shifts/HrShiftsSchedule";

export class HrShiftsScheduleService {
  private repository = new Map<string, HrShiftsScheduleModel>();

  public create(data: Omit<HrShiftsScheduleModel, "id" | "version" | "createdAt" | "updatedAt">): HrShiftsScheduleModel {
    const id = "hr_s_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: HrShiftsScheduleModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = HrShiftsScheduleValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for HrShiftsSchedule: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): HrShiftsScheduleModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: HrShiftsScheduleModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<HrShiftsScheduleModel>): HrShiftsScheduleModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: HrShiftsScheduleModel = {
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
