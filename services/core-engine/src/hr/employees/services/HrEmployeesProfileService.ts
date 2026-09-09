import { HrEmployeesProfileModel, HrEmployeesProfileValidator } from "@nexora/types/domains/hr/employees/HrEmployeesProfile";

export class HrEmployeesProfileService {
  private repository = new Map<string, HrEmployeesProfileModel>();

  public create(data: Omit<HrEmployeesProfileModel, "id" | "version" | "createdAt" | "updatedAt">): HrEmployeesProfileModel {
    const id = "hr_e_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: HrEmployeesProfileModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = HrEmployeesProfileValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for HrEmployeesProfile: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): HrEmployeesProfileModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: HrEmployeesProfileModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<HrEmployeesProfileModel>): HrEmployeesProfileModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: HrEmployeesProfileModel = {
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
