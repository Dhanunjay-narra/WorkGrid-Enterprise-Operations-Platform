import { HrPayrollStateModel, HrPayrollStateValidator } from "@nexora/types/domains/hr/payroll/HrPayrollState";

export class HrPayrollStateService {
  private repository = new Map<string, HrPayrollStateModel>();

  public create(data: Omit<HrPayrollStateModel, "id" | "version" | "createdAt" | "updatedAt">): HrPayrollStateModel {
    const id = "hr_p_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: HrPayrollStateModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = HrPayrollStateValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for HrPayrollState: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): HrPayrollStateModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: HrPayrollStateModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<HrPayrollStateModel>): HrPayrollStateModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: HrPayrollStateModel = {
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
