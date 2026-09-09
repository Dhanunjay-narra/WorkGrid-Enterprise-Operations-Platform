import { HrEmployeesMetricModel, HrEmployeesMetricValidator } from "@nexora/types/domains/hr/employees/HrEmployeesMetric";

export class HrEmployeesMetricService {
  private repository = new Map<string, HrEmployeesMetricModel>();

  public create(data: Omit<HrEmployeesMetricModel, "id" | "version" | "createdAt" | "updatedAt">): HrEmployeesMetricModel {
    const id = "hr_e_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: HrEmployeesMetricModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = HrEmployeesMetricValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for HrEmployeesMetric: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): HrEmployeesMetricModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: HrEmployeesMetricModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<HrEmployeesMetricModel>): HrEmployeesMetricModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: HrEmployeesMetricModel = {
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
