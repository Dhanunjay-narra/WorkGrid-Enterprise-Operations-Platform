import { HrAttendanceNodeModel, HrAttendanceNodeValidator } from "@nexora/types/domains/hr/attendance/HrAttendanceNode";

export class HrAttendanceNodeService {
  private repository = new Map<string, HrAttendanceNodeModel>();

  public create(data: Omit<HrAttendanceNodeModel, "id" | "version" | "createdAt" | "updatedAt">): HrAttendanceNodeModel {
    const id = "hr_a_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: HrAttendanceNodeModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = HrAttendanceNodeValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for HrAttendanceNode: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): HrAttendanceNodeModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: HrAttendanceNodeModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<HrAttendanceNodeModel>): HrAttendanceNodeModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: HrAttendanceNodeModel = {
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
