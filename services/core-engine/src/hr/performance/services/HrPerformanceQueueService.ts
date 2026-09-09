import { HrPerformanceQueueModel, HrPerformanceQueueValidator } from "@nexora/types/domains/hr/performance/HrPerformanceQueue";

export class HrPerformanceQueueService {
  private repository = new Map<string, HrPerformanceQueueModel>();

  public create(data: Omit<HrPerformanceQueueModel, "id" | "version" | "createdAt" | "updatedAt">): HrPerformanceQueueModel {
    const id = "hr_p_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: HrPerformanceQueueModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = HrPerformanceQueueValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for HrPerformanceQueue: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): HrPerformanceQueueModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: HrPerformanceQueueModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<HrPerformanceQueueModel>): HrPerformanceQueueModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: HrPerformanceQueueModel = {
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
