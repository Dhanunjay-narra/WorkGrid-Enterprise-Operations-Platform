import { IntRateLimitsTaskModel, IntRateLimitsTaskValidator } from "@nexora/types/domains/int/rate_limits/IntRateLimitsTask";

export class IntRateLimitsTaskService {
  private repository = new Map<string, IntRateLimitsTaskModel>();

  public create(data: Omit<IntRateLimitsTaskModel, "id" | "version" | "createdAt" | "updatedAt">): IntRateLimitsTaskModel {
    const id = "int__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: IntRateLimitsTaskModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = IntRateLimitsTaskValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for IntRateLimitsTask: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): IntRateLimitsTaskModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: IntRateLimitsTaskModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<IntRateLimitsTaskModel>): IntRateLimitsTaskModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: IntRateLimitsTaskModel = {
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
