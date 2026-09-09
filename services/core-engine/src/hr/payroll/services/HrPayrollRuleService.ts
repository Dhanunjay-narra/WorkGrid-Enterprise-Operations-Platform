import { HrPayrollRuleModel, HrPayrollRuleValidator } from "@nexora/types/domains/hr/payroll/HrPayrollRule";

export class HrPayrollRuleService {
  private repository = new Map<string, HrPayrollRuleModel>();

  public create(data: Omit<HrPayrollRuleModel, "id" | "version" | "createdAt" | "updatedAt">): HrPayrollRuleModel {
    const id = "hr_p_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: HrPayrollRuleModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = HrPayrollRuleValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for HrPayrollRule: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): HrPayrollRuleModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: HrPayrollRuleModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<HrPayrollRuleModel>): HrPayrollRuleModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: HrPayrollRuleModel = {
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
