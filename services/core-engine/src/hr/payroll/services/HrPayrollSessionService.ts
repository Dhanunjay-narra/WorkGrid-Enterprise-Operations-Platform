import { HrPayrollSessionModel, HrPayrollSessionValidator } from "@nexora/types/domains/hr/payroll/HrPayrollSession";

export class HrPayrollSessionService {
  private repository = new Map<string, HrPayrollSessionModel>();

  public create(data: Omit<HrPayrollSessionModel, "id" | "version" | "createdAt" | "updatedAt">): HrPayrollSessionModel {
    const id = "hr_p_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: HrPayrollSessionModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = HrPayrollSessionValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for HrPayrollSession: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): HrPayrollSessionModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: HrPayrollSessionModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<HrPayrollSessionModel>): HrPayrollSessionModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: HrPayrollSessionModel = {
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
