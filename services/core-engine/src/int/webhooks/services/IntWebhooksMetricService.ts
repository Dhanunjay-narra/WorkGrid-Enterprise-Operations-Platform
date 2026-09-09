import { IntWebhooksMetricModel, IntWebhooksMetricValidator } from "@nexora/types/domains/int/webhooks/IntWebhooksMetric";

export class IntWebhooksMetricService {
  private repository = new Map<string, IntWebhooksMetricModel>();

  public create(data: Omit<IntWebhooksMetricModel, "id" | "version" | "createdAt" | "updatedAt">): IntWebhooksMetricModel {
    const id = "int__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: IntWebhooksMetricModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = IntWebhooksMetricValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for IntWebhooksMetric: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): IntWebhooksMetricModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: IntWebhooksMetricModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<IntWebhooksMetricModel>): IntWebhooksMetricModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: IntWebhooksMetricModel = {
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
