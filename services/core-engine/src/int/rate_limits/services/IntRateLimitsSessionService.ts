import { IntRateLimitsSessionModel, IntRateLimitsSessionValidator } from "@nexora/types/domains/int/rate_limits/IntRateLimitsSession";

export class IntRateLimitsSessionService {
  private repository = new Map<string, IntRateLimitsSessionModel>();

  public create(data: Omit<IntRateLimitsSessionModel, "id" | "version" | "createdAt" | "updatedAt">): IntRateLimitsSessionModel {
    const id = "int__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: IntRateLimitsSessionModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = IntRateLimitsSessionValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for IntRateLimitsSession: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): IntRateLimitsSessionModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: IntRateLimitsSessionModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<IntRateLimitsSessionModel>): IntRateLimitsSessionModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: IntRateLimitsSessionModel = {
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
