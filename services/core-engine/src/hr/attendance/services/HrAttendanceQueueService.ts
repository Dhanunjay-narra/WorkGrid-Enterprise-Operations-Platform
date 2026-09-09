import { HrAttendanceQueueModel, HrAttendanceQueueValidator } from "@nexora/types/domains/hr/attendance/HrAttendanceQueue";

export class HrAttendanceQueueService {
  private repository = new Map<string, HrAttendanceQueueModel>();

  public create(data: Omit<HrAttendanceQueueModel, "id" | "version" | "createdAt" | "updatedAt">): HrAttendanceQueueModel {
    const id = "hr_a_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: HrAttendanceQueueModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = HrAttendanceQueueValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for HrAttendanceQueue: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): HrAttendanceQueueModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: HrAttendanceQueueModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<HrAttendanceQueueModel>): HrAttendanceQueueModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: HrAttendanceQueueModel = {
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
