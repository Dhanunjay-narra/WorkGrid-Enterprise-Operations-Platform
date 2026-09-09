import { EventsMetricsPolicyModel, EventsMetricsPolicyValidator } from "@nexora/types/domains/events/metrics/EventsMetricsPolicy";

export class EventsMetricsPolicyService {
  private repository = new Map<string, EventsMetricsPolicyModel>();

  public create(data: Omit<EventsMetricsPolicyModel, "id" | "version" | "createdAt" | "updatedAt">): EventsMetricsPolicyModel {
    const id = "even_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: EventsMetricsPolicyModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = EventsMetricsPolicyValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for EventsMetricsPolicy: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): EventsMetricsPolicyModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: EventsMetricsPolicyModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<EventsMetricsPolicyModel>): EventsMetricsPolicyModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: EventsMetricsPolicyModel = {
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
