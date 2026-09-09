import { SupportQueuesMetricModel, SupportQueuesMetricValidator } from "@nexora/types/domains/support/queues/SupportQueuesMetric";

export class SupportQueuesMetricService {
  private repository = new Map<string, SupportQueuesMetricModel>();

  public create(data: Omit<SupportQueuesMetricModel, "id" | "version" | "createdAt" | "updatedAt">): SupportQueuesMetricModel {
    const id = "supp_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: SupportQueuesMetricModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = SupportQueuesMetricValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for SupportQueuesMetric: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): SupportQueuesMetricModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: SupportQueuesMetricModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<SupportQueuesMetricModel>): SupportQueuesMetricModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: SupportQueuesMetricModel = {
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
