import { IntRateLimitsNodeModel, IntRateLimitsNodeValidator } from "@nexora/types/domains/int/rate_limits/IntRateLimitsNode";

export class IntRateLimitsNodeService {
  private repository = new Map<string, IntRateLimitsNodeModel>();

  public create(data: Omit<IntRateLimitsNodeModel, "id" | "version" | "createdAt" | "updatedAt">): IntRateLimitsNodeModel {
    const id = "int__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: IntRateLimitsNodeModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = IntRateLimitsNodeValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for IntRateLimitsNode: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): IntRateLimitsNodeModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: IntRateLimitsNodeModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<IntRateLimitsNodeModel>): IntRateLimitsNodeModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: IntRateLimitsNodeModel = {
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
