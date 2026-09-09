import { HrAttendanceEntryModel, HrAttendanceEntryValidator } from "@nexora/types/domains/hr/attendance/HrAttendanceEntry";

export class HrAttendanceEntryService {
  private repository = new Map<string, HrAttendanceEntryModel>();

  public create(data: Omit<HrAttendanceEntryModel, "id" | "version" | "createdAt" | "updatedAt">): HrAttendanceEntryModel {
    const id = "hr_a_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: HrAttendanceEntryModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = HrAttendanceEntryValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for HrAttendanceEntry: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): HrAttendanceEntryModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: HrAttendanceEntryModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<HrAttendanceEntryModel>): HrAttendanceEntryModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: HrAttendanceEntryModel = {
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
