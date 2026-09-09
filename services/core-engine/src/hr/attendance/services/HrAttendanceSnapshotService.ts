import { HrAttendanceSnapshotModel, HrAttendanceSnapshotValidator } from "@nexora/types/domains/hr/attendance/HrAttendanceSnapshot";

export class HrAttendanceSnapshotService {
  private repository = new Map<string, HrAttendanceSnapshotModel>();

  public create(data: Omit<HrAttendanceSnapshotModel, "id" | "version" | "createdAt" | "updatedAt">): HrAttendanceSnapshotModel {
    const id = "hr_a_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: HrAttendanceSnapshotModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = HrAttendanceSnapshotValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for HrAttendanceSnapshot: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): HrAttendanceSnapshotModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: HrAttendanceSnapshotModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<HrAttendanceSnapshotModel>): HrAttendanceSnapshotModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: HrAttendanceSnapshotModel = {
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
