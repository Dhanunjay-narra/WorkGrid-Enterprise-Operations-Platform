import { HrPayrollMetricModel, HrPayrollMetricValidator } from "@nexora/types/domains/hr/payroll/HrPayrollMetric";

export class HrPayrollMetricService {
  private repository = new Map<string, HrPayrollMetricModel>();

  public create(data: Omit<HrPayrollMetricModel, "id" | "version" | "createdAt" | "updatedAt">): HrPayrollMetricModel {
    const id = "hr_p_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: HrPayrollMetricModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = HrPayrollMetricValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for HrPayrollMetric: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): HrPayrollMetricModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: HrPayrollMetricModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<HrPayrollMetricModel>): HrPayrollMetricModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: HrPayrollMetricModel = {
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
