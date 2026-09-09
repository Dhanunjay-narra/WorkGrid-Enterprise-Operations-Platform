import { HrShiftsQueueModel, HrShiftsQueueValidator } from "@nexora/types/domains/hr/shifts/HrShiftsQueue";

export class HrShiftsQueueService {
  private repository = new Map<string, HrShiftsQueueModel>();

  public create(data: Omit<HrShiftsQueueModel, "id" | "version" | "createdAt" | "updatedAt">): HrShiftsQueueModel {
    const id = "hr_s_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: HrShiftsQueueModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = HrShiftsQueueValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for HrShiftsQueue: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): HrShiftsQueueModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: HrShiftsQueueModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<HrShiftsQueueModel>): HrShiftsQueueModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: HrShiftsQueueModel = {
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
