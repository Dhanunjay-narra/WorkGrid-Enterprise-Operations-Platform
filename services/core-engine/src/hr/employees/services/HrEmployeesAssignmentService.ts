import { HrEmployeesAssignmentModel, HrEmployeesAssignmentValidator } from "@nexora/types/domains/hr/employees/HrEmployeesAssignment";

export class HrEmployeesAssignmentService {
  private repository = new Map<string, HrEmployeesAssignmentModel>();

  public create(data: Omit<HrEmployeesAssignmentModel, "id" | "version" | "createdAt" | "updatedAt">): HrEmployeesAssignmentModel {
    const id = "hr_e_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: HrEmployeesAssignmentModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = HrEmployeesAssignmentValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for HrEmployeesAssignment: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): HrEmployeesAssignmentModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: HrEmployeesAssignmentModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<HrEmployeesAssignmentModel>): HrEmployeesAssignmentModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: HrEmployeesAssignmentModel = {
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
