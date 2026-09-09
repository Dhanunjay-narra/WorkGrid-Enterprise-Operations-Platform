import { IntRateLimitsConfigModel, IntRateLimitsConfigValidator } from "@nexora/types/domains/int/rate_limits/IntRateLimitsConfig";

export class IntRateLimitsConfigService {
  private repository = new Map<string, IntRateLimitsConfigModel>();

  public create(data: Omit<IntRateLimitsConfigModel, "id" | "version" | "createdAt" | "updatedAt">): IntRateLimitsConfigModel {
    const id = "int__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: IntRateLimitsConfigModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = IntRateLimitsConfigValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for IntRateLimitsConfig: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): IntRateLimitsConfigModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: IntRateLimitsConfigModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<IntRateLimitsConfigModel>): IntRateLimitsConfigModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: IntRateLimitsConfigModel = {
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
