import { HrEmployeesConfigModel, HrEmployeesConfigValidator } from "@nexora/types/domains/hr/employees/HrEmployeesConfig";

export class HrEmployeesConfigService {
  private repository = new Map<string, HrEmployeesConfigModel>();

  public create(data: Omit<HrEmployeesConfigModel, "id" | "version" | "createdAt" | "updatedAt">): HrEmployeesConfigModel {
    const id = "hr_e_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: HrEmployeesConfigModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = HrEmployeesConfigValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for HrEmployeesConfig: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): HrEmployeesConfigModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: HrEmployeesConfigModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<HrEmployeesConfigModel>): HrEmployeesConfigModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: HrEmployeesConfigModel = {
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
