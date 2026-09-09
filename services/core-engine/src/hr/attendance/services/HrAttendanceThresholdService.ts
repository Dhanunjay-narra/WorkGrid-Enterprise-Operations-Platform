import { HrAttendanceThresholdModel, HrAttendanceThresholdValidator } from "@nexora/types/domains/hr/attendance/HrAttendanceThreshold";

export class HrAttendanceThresholdService {
  private repository = new Map<string, HrAttendanceThresholdModel>();

  public create(data: Omit<HrAttendanceThresholdModel, "id" | "version" | "createdAt" | "updatedAt">): HrAttendanceThresholdModel {
    const id = "hr_a_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: HrAttendanceThresholdModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = HrAttendanceThresholdValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for HrAttendanceThreshold: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): HrAttendanceThresholdModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: HrAttendanceThresholdModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<HrAttendanceThresholdModel>): HrAttendanceThresholdModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: HrAttendanceThresholdModel = {
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
