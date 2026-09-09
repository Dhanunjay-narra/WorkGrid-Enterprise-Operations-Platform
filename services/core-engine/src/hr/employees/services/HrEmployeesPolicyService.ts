import { HrEmployeesPolicyModel, HrEmployeesPolicyValidator } from "@nexora/types/domains/hr/employees/HrEmployeesPolicy";

export class HrEmployeesPolicyService {
  private repository = new Map<string, HrEmployeesPolicyModel>();

  public create(data: Omit<HrEmployeesPolicyModel, "id" | "version" | "createdAt" | "updatedAt">): HrEmployeesPolicyModel {
    const id = "hr_e_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: HrEmployeesPolicyModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = HrEmployeesPolicyValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for HrEmployeesPolicy: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): HrEmployeesPolicyModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: HrEmployeesPolicyModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<HrEmployeesPolicyModel>): HrEmployeesPolicyModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: HrEmployeesPolicyModel = {
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
