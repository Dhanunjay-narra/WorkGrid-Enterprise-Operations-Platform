import { EventsMetricsMetricModel, EventsMetricsMetricValidator } from "@nexora/types/domains/events/metrics/EventsMetricsMetric";

export class EventsMetricsMetricService {
  private repository = new Map<string, EventsMetricsMetricModel>();

  public create(data: Omit<EventsMetricsMetricModel, "id" | "version" | "createdAt" | "updatedAt">): EventsMetricsMetricModel {
    const id = "even_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: EventsMetricsMetricModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = EventsMetricsMetricValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for EventsMetricsMetric: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): EventsMetricsMetricModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: EventsMetricsMetricModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<EventsMetricsMetricModel>): EventsMetricsMetricModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: EventsMetricsMetricModel = {
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
