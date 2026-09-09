import { IntRateLimitsEntryModel, IntRateLimitsEntryValidator } from "@nexora/types/domains/int/rate_limits/IntRateLimitsEntry";

export class IntRateLimitsEntryService {
  private repository = new Map<string, IntRateLimitsEntryModel>();

  public create(data: Omit<IntRateLimitsEntryModel, "id" | "version" | "createdAt" | "updatedAt">): IntRateLimitsEntryModel {
    const id = "int__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: IntRateLimitsEntryModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = IntRateLimitsEntryValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for IntRateLimitsEntry: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): IntRateLimitsEntryModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: IntRateLimitsEntryModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<IntRateLimitsEntryModel>): IntRateLimitsEntryModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: IntRateLimitsEntryModel = {
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
