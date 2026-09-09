import { HrShiftsAssignmentModel, HrShiftsAssignmentValidator } from "@nexora/types/domains/hr/shifts/HrShiftsAssignment";

export class HrShiftsAssignmentService {
  private repository = new Map<string, HrShiftsAssignmentModel>();

  public create(data: Omit<HrShiftsAssignmentModel, "id" | "version" | "createdAt" | "updatedAt">): HrShiftsAssignmentModel {
    const id = "hr_s_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: HrShiftsAssignmentModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = HrShiftsAssignmentValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for HrShiftsAssignment: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): HrShiftsAssignmentModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: HrShiftsAssignmentModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<HrShiftsAssignmentModel>): HrShiftsAssignmentModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: HrShiftsAssignmentModel = {
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
