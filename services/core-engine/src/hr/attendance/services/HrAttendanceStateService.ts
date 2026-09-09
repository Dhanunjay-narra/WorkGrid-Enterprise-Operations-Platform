import { HrAttendanceStateModel, HrAttendanceStateValidator } from "@nexora/types/domains/hr/attendance/HrAttendanceState";

export class HrAttendanceStateService {
  private repository = new Map<string, HrAttendanceStateModel>();

  public create(data: Omit<HrAttendanceStateModel, "id" | "version" | "createdAt" | "updatedAt">): HrAttendanceStateModel {
    const id = "hr_a_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: HrAttendanceStateModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = HrAttendanceStateValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for HrAttendanceState: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): HrAttendanceStateModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: HrAttendanceStateModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<HrAttendanceStateModel>): HrAttendanceStateModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: HrAttendanceStateModel = {
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
