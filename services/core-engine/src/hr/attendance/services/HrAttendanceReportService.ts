import { HrAttendanceReportModel, HrAttendanceReportValidator } from "@nexora/types/domains/hr/attendance/HrAttendanceReport";

export class HrAttendanceReportService {
  private repository = new Map<string, HrAttendanceReportModel>();

  public create(data: Omit<HrAttendanceReportModel, "id" | "version" | "createdAt" | "updatedAt">): HrAttendanceReportModel {
    const id = "hr_a_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: HrAttendanceReportModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = HrAttendanceReportValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for HrAttendanceReport: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): HrAttendanceReportModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: HrAttendanceReportModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<HrAttendanceReportModel>): HrAttendanceReportModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: HrAttendanceReportModel = {
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
