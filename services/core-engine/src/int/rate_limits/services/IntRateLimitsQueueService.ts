import { IntRateLimitsQueueModel, IntRateLimitsQueueValidator } from "@nexora/types/domains/int/rate_limits/IntRateLimitsQueue";

export class IntRateLimitsQueueService {
  private repository = new Map<string, IntRateLimitsQueueModel>();

  public create(data: Omit<IntRateLimitsQueueModel, "id" | "version" | "createdAt" | "updatedAt">): IntRateLimitsQueueModel {
    const id = "int__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: IntRateLimitsQueueModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = IntRateLimitsQueueValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for IntRateLimitsQueue: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): IntRateLimitsQueueModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: IntRateLimitsQueueModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<IntRateLimitsQueueModel>): IntRateLimitsQueueModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: IntRateLimitsQueueModel = {
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
