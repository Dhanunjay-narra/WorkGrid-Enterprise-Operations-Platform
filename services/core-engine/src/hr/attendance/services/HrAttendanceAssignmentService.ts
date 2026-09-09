import { HrAttendanceAssignmentModel, HrAttendanceAssignmentValidator } from "@nexora/types/domains/hr/attendance/HrAttendanceAssignment";

export class HrAttendanceAssignmentService {
  private repository = new Map<string, HrAttendanceAssignmentModel>();

  public create(data: Omit<HrAttendanceAssignmentModel, "id" | "version" | "createdAt" | "updatedAt">): HrAttendanceAssignmentModel {
    const id = "hr_a_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: HrAttendanceAssignmentModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = HrAttendanceAssignmentValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for HrAttendanceAssignment: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): HrAttendanceAssignmentModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: HrAttendanceAssignmentModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<HrAttendanceAssignmentModel>): HrAttendanceAssignmentModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: HrAttendanceAssignmentModel = {
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
