import { HrEmployeesRuleModel, HrEmployeesRuleValidator } from "@nexora/types/domains/hr/employees/HrEmployeesRule";

export class HrEmployeesRuleService {
  private repository = new Map<string, HrEmployeesRuleModel>();

  public create(data: Omit<HrEmployeesRuleModel, "id" | "version" | "createdAt" | "updatedAt">): HrEmployeesRuleModel {
    const id = "hr_e_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: HrEmployeesRuleModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = HrEmployeesRuleValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for HrEmployeesRule: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): HrEmployeesRuleModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: HrEmployeesRuleModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<HrEmployeesRuleModel>): HrEmployeesRuleModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: HrEmployeesRuleModel = {
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
