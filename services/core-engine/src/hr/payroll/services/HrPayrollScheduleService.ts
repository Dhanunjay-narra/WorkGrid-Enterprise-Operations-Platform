import { HrPayrollScheduleModel, HrPayrollScheduleValidator } from "@nexora/types/domains/hr/payroll/HrPayrollSchedule";

export class HrPayrollScheduleService {
  private repository = new Map<string, HrPayrollScheduleModel>();

  public create(data: Omit<HrPayrollScheduleModel, "id" | "version" | "createdAt" | "updatedAt">): HrPayrollScheduleModel {
    const id = "hr_p_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: HrPayrollScheduleModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = HrPayrollScheduleValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for HrPayrollSchedule: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): HrPayrollScheduleModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: HrPayrollScheduleModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<HrPayrollScheduleModel>): HrPayrollScheduleModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: HrPayrollScheduleModel = {
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
