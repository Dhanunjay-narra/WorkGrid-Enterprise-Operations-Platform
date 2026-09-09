import { HrAttendanceMetricModel, HrAttendanceMetricValidator } from "@nexora/types/domains/hr/attendance/HrAttendanceMetric";

export class HrAttendanceMetricService {
  private repository = new Map<string, HrAttendanceMetricModel>();

  public create(data: Omit<HrAttendanceMetricModel, "id" | "version" | "createdAt" | "updatedAt">): HrAttendanceMetricModel {
    const id = "hr_a_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: HrAttendanceMetricModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = HrAttendanceMetricValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for HrAttendanceMetric: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): HrAttendanceMetricModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: HrAttendanceMetricModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<HrAttendanceMetricModel>): HrAttendanceMetricModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: HrAttendanceMetricModel = {
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
