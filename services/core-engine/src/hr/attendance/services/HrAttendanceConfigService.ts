import { HrAttendanceConfigModel, HrAttendanceConfigValidator } from "@nexora/types/domains/hr/attendance/HrAttendanceConfig";

export class HrAttendanceConfigService {
  private repository = new Map<string, HrAttendanceConfigModel>();

  public create(data: Omit<HrAttendanceConfigModel, "id" | "version" | "createdAt" | "updatedAt">): HrAttendanceConfigModel {
    const id = "hr_a_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: HrAttendanceConfigModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = HrAttendanceConfigValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for HrAttendanceConfig: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): HrAttendanceConfigModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: HrAttendanceConfigModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<HrAttendanceConfigModel>): HrAttendanceConfigModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: HrAttendanceConfigModel = {
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
