import { HrDepartmentsAssignmentModel, HrDepartmentsAssignmentValidator } from "@nexora/types/domains/hr/departments/HrDepartmentsAssignment";

export class HrDepartmentsAssignmentService {
  private repository = new Map<string, HrDepartmentsAssignmentModel>();

  public create(data: Omit<HrDepartmentsAssignmentModel, "id" | "version" | "createdAt" | "updatedAt">): HrDepartmentsAssignmentModel {
    const id = "hr_d_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: HrDepartmentsAssignmentModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = HrDepartmentsAssignmentValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for HrDepartmentsAssignment: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): HrDepartmentsAssignmentModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: HrDepartmentsAssignmentModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<HrDepartmentsAssignmentModel>): HrDepartmentsAssignmentModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: HrDepartmentsAssignmentModel = {
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
