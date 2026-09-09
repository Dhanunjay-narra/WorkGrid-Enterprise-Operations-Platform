import { IntRateLimitsEventModel, IntRateLimitsEventValidator } from "@nexora/types/domains/int/rate_limits/IntRateLimitsEvent";

export class IntRateLimitsEventService {
  private repository = new Map<string, IntRateLimitsEventModel>();

  public create(data: Omit<IntRateLimitsEventModel, "id" | "version" | "createdAt" | "updatedAt">): IntRateLimitsEventModel {
    const id = "int__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: IntRateLimitsEventModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = IntRateLimitsEventValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for IntRateLimitsEvent: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): IntRateLimitsEventModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: IntRateLimitsEventModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<IntRateLimitsEventModel>): IntRateLimitsEventModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: IntRateLimitsEventModel = {
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
