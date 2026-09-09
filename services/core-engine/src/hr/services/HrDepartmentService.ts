import { HrDepartmentData, HrDepartmentValidator } from "../../../../packages/types/src/domains/hr/HrDepartment";

export class HrDepartmentService {
  private repository = new Map<string, HrDepartmentData>();

  public create(data: Omit<HrDepartmentData, "id" | "createdAt" | "updatedAt">): HrDepartmentData {
    const id = "hr_" + Math.random().toString(36).substring(2, 9);
    const now = new Date().toISOString();
    const item: HrDepartmentData = {
      ...data,
      id,
      createdAt: now,
      updatedAt: now
    };
    const validation = HrDepartmentValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for HrDepartment: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): HrDepartmentData | undefined {
    return this.repository.get(id);
  }

  public listByTenant(tenantId: string): HrDepartmentData[] {
    return Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
  }

  public update(id: string, updates: Partial<HrDepartmentData>): HrDepartmentData | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: HrDepartmentData = { ...existing, ...updates, updatedAt: new Date().toISOString() };
    this.repository.set(id, updated);
    return updated;
  }

  public delete(id: string): boolean {
    return this.repository.delete(id);
  }
}
