import { HrAttendanceItemModel, HrAttendanceItemValidator } from "@nexora/types/domains/hr/attendance/HrAttendanceItem";

export class HrAttendanceItemService {
  private repository = new Map<string, HrAttendanceItemModel>();

  public create(data: Omit<HrAttendanceItemModel, "id" | "version" | "createdAt" | "updatedAt">): HrAttendanceItemModel {
    const id = "hr_a_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: HrAttendanceItemModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = HrAttendanceItemValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for HrAttendanceItem: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): HrAttendanceItemModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: HrAttendanceItemModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<HrAttendanceItemModel>): HrAttendanceItemModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: HrAttendanceItemModel = {
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
