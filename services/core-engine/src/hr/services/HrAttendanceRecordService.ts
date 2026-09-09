import { HrAttendanceRecordData, HrAttendanceRecordValidator } from "../../../../packages/types/src/domains/hr/HrAttendanceRecord";

export class HrAttendanceRecordService {
  private repository = new Map<string, HrAttendanceRecordData>();

  public create(data: Omit<HrAttendanceRecordData, "id" | "createdAt" | "updatedAt">): HrAttendanceRecordData {
    const id = "hr_" + Math.random().toString(36).substring(2, 9);
    const now = new Date().toISOString();
    const item: HrAttendanceRecordData = {
      ...data,
      id,
      createdAt: now,
      updatedAt: now
    };
    const validation = HrAttendanceRecordValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for HrAttendanceRecord: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): HrAttendanceRecordData | undefined {
    return this.repository.get(id);
  }

  public listByTenant(tenantId: string): HrAttendanceRecordData[] {
    return Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
  }

  public update(id: string, updates: Partial<HrAttendanceRecordData>): HrAttendanceRecordData | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: HrAttendanceRecordData = { ...existing, ...updates, updatedAt: new Date().toISOString() };
    this.repository.set(id, updated);
    return updated;
  }

  public delete(id: string): boolean {
    return this.repository.delete(id);
  }
}
