import { HrDepartmentsScheduleModel, HrDepartmentsScheduleValidator } from "@nexora/types/domains/hr/departments/HrDepartmentsSchedule";

export class HrDepartmentsScheduleService {
  private repository = new Map<string, HrDepartmentsScheduleModel>();

  public create(data: Omit<HrDepartmentsScheduleModel, "id" | "version" | "createdAt" | "updatedAt">): HrDepartmentsScheduleModel {
    const id = "hr_d_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: HrDepartmentsScheduleModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = HrDepartmentsScheduleValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for HrDepartmentsSchedule: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): HrDepartmentsScheduleModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: HrDepartmentsScheduleModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<HrDepartmentsScheduleModel>): HrDepartmentsScheduleModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: HrDepartmentsScheduleModel = {
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
