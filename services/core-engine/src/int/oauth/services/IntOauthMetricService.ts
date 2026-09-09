import { IntOauthMetricModel, IntOauthMetricValidator } from "@nexora/types/domains/int/oauth/IntOauthMetric";

export class IntOauthMetricService {
  private repository = new Map<string, IntOauthMetricModel>();

  public create(data: Omit<IntOauthMetricModel, "id" | "version" | "createdAt" | "updatedAt">): IntOauthMetricModel {
    const id = "int__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: IntOauthMetricModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = IntOauthMetricValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for IntOauthMetric: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): IntOauthMetricModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: IntOauthMetricModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<IntOauthMetricModel>): IntOauthMetricModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: IntOauthMetricModel = {
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
