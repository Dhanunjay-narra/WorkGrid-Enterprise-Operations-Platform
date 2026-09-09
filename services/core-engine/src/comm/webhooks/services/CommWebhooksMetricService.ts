import { CommWebhooksMetricModel, CommWebhooksMetricValidator } from "@nexora/types/domains/comm/webhooks/CommWebhooksMetric";

export class CommWebhooksMetricService {
  private repository = new Map<string, CommWebhooksMetricModel>();

  public create(data: Omit<CommWebhooksMetricModel, "id" | "version" | "createdAt" | "updatedAt">): CommWebhooksMetricModel {
    const id = "comm_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: CommWebhooksMetricModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = CommWebhooksMetricValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for CommWebhooksMetric: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): CommWebhooksMetricModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: CommWebhooksMetricModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<CommWebhooksMetricModel>): CommWebhooksMetricModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: CommWebhooksMetricModel = {
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
