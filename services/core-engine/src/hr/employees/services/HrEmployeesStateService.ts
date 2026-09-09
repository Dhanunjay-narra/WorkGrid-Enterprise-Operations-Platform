import { HrEmployeesStateModel, HrEmployeesStateValidator } from "@nexora/types/domains/hr/employees/HrEmployeesState";

export class HrEmployeesStateService {
  private repository = new Map<string, HrEmployeesStateModel>();

  public create(data: Omit<HrEmployeesStateModel, "id" | "version" | "createdAt" | "updatedAt">): HrEmployeesStateModel {
    const id = "hr_e_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: HrEmployeesStateModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = HrEmployeesStateValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for HrEmployeesState: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): HrEmployeesStateModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: HrEmployeesStateModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<HrEmployeesStateModel>): HrEmployeesStateModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: HrEmployeesStateModel = {
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
