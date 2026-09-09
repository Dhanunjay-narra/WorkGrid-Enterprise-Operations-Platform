import { HrLeaveQueueModel, HrLeaveQueueValidator } from "@nexora/types/domains/hr/leave/HrLeaveQueue";

export class HrLeaveQueueService {
  private repository = new Map<string, HrLeaveQueueModel>();

  public create(data: Omit<HrLeaveQueueModel, "id" | "version" | "createdAt" | "updatedAt">): HrLeaveQueueModel {
    const id = "hr_l_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: HrLeaveQueueModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = HrLeaveQueueValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for HrLeaveQueue: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): HrLeaveQueueModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: HrLeaveQueueModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<HrLeaveQueueModel>): HrLeaveQueueModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: HrLeaveQueueModel = {
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
