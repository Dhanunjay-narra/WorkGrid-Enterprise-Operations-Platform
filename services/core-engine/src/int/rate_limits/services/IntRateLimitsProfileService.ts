import { IntRateLimitsProfileModel, IntRateLimitsProfileValidator } from "@nexora/types/domains/int/rate_limits/IntRateLimitsProfile";

export class IntRateLimitsProfileService {
  private repository = new Map<string, IntRateLimitsProfileModel>();

  public create(data: Omit<IntRateLimitsProfileModel, "id" | "version" | "createdAt" | "updatedAt">): IntRateLimitsProfileModel {
    const id = "int__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: IntRateLimitsProfileModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = IntRateLimitsProfileValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for IntRateLimitsProfile: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): IntRateLimitsProfileModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: IntRateLimitsProfileModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<IntRateLimitsProfileModel>): IntRateLimitsProfileModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: IntRateLimitsProfileModel = {
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
