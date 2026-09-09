import { IntRateLimitsPayloadModel, IntRateLimitsPayloadValidator } from "@nexora/types/domains/int/rate_limits/IntRateLimitsPayload";

export class IntRateLimitsPayloadService {
  private repository = new Map<string, IntRateLimitsPayloadModel>();

  public create(data: Omit<IntRateLimitsPayloadModel, "id" | "version" | "createdAt" | "updatedAt">): IntRateLimitsPayloadModel {
    const id = "int__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: IntRateLimitsPayloadModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = IntRateLimitsPayloadValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for IntRateLimitsPayload: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): IntRateLimitsPayloadModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: IntRateLimitsPayloadModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<IntRateLimitsPayloadModel>): IntRateLimitsPayloadModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: IntRateLimitsPayloadModel = {
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
