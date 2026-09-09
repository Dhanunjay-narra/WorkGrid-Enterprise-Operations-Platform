import { HrEmployeeData, HrEmployeeValidator } from "../../../../packages/types/src/domains/hr/HrEmployee";

export class HrEmployeeService {
  private repository = new Map<string, HrEmployeeData>();

  public create(data: Omit<HrEmployeeData, "id" | "createdAt" | "updatedAt">): HrEmployeeData {
    const id = "hr_" + Math.random().toString(36).substring(2, 9);
    const now = new Date().toISOString();
    const item: HrEmployeeData = {
      ...data,
      id,
      createdAt: now,
      updatedAt: now
    };
    const validation = HrEmployeeValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for HrEmployee: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): HrEmployeeData | undefined {
    return this.repository.get(id);
  }

  public listByTenant(tenantId: string): HrEmployeeData[] {
    return Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
  }

  public update(id: string, updates: Partial<HrEmployeeData>): HrEmployeeData | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: HrEmployeeData = { ...existing, ...updates, updatedAt: new Date().toISOString() };
    this.repository.set(id, updated);
    return updated;
  }

  public delete(id: string): boolean {
    return this.repository.delete(id);
  }
}
