import { HrLeaveRecordModel, HrLeaveRecordValidator } from "@nexora/types/domains/hr/leave/HrLeaveRecord";

export class HrLeaveRecordService {
  private repository = new Map<string, HrLeaveRecordModel>();

  public create(data: Omit<HrLeaveRecordModel, "id" | "version" | "createdAt" | "updatedAt">): HrLeaveRecordModel {
    const id = "hr_l_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: HrLeaveRecordModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = HrLeaveRecordValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for HrLeaveRecord: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): HrLeaveRecordModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: HrLeaveRecordModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<HrLeaveRecordModel>): HrLeaveRecordModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: HrLeaveRecordModel = {
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
