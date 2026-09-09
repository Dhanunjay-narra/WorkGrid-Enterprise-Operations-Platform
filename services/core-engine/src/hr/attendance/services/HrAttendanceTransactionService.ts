import { HrAttendanceTransactionModel, HrAttendanceTransactionValidator } from "@nexora/types/domains/hr/attendance/HrAttendanceTransaction";

export class HrAttendanceTransactionService {
  private repository = new Map<string, HrAttendanceTransactionModel>();

  public create(data: Omit<HrAttendanceTransactionModel, "id" | "version" | "createdAt" | "updatedAt">): HrAttendanceTransactionModel {
    const id = "hr_a_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: HrAttendanceTransactionModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = HrAttendanceTransactionValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for HrAttendanceTransaction: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): HrAttendanceTransactionModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: HrAttendanceTransactionModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<HrAttendanceTransactionModel>): HrAttendanceTransactionModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: HrAttendanceTransactionModel = {
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
