import { HrAttendanceTaskModel, HrAttendanceTaskValidator } from "@nexora/types/domains/hr/attendance/HrAttendanceTask";

export class HrAttendanceTaskService {
  private repository = new Map<string, HrAttendanceTaskModel>();

  public create(data: Omit<HrAttendanceTaskModel, "id" | "version" | "createdAt" | "updatedAt">): HrAttendanceTaskModel {
    const id = "hr_a_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: HrAttendanceTaskModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = HrAttendanceTaskValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for HrAttendanceTask: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): HrAttendanceTaskModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: HrAttendanceTaskModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<HrAttendanceTaskModel>): HrAttendanceTaskModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: HrAttendanceTaskModel = {
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
