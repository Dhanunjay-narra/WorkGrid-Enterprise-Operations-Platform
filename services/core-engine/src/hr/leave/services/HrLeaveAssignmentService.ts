import { HrLeaveAssignmentModel, HrLeaveAssignmentValidator } from "@nexora/types/domains/hr/leave/HrLeaveAssignment";

export class HrLeaveAssignmentService {
  private repository = new Map<string, HrLeaveAssignmentModel>();

  public create(data: Omit<HrLeaveAssignmentModel, "id" | "version" | "createdAt" | "updatedAt">): HrLeaveAssignmentModel {
    const id = "hr_l_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: HrLeaveAssignmentModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = HrLeaveAssignmentValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for HrLeaveAssignment: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): HrLeaveAssignmentModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: HrLeaveAssignmentModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<HrLeaveAssignmentModel>): HrLeaveAssignmentModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: HrLeaveAssignmentModel = {
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
