import { EventsMetricsEventModel, EventsMetricsEventValidator } from "@nexora/types/domains/events/metrics/EventsMetricsEvent";

export class EventsMetricsEventService {
  private repository = new Map<string, EventsMetricsEventModel>();

  public create(data: Omit<EventsMetricsEventModel, "id" | "version" | "createdAt" | "updatedAt">): EventsMetricsEventModel {
    const id = "even_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: EventsMetricsEventModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = EventsMetricsEventValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for EventsMetricsEvent: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): EventsMetricsEventModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: EventsMetricsEventModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<EventsMetricsEventModel>): EventsMetricsEventModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: EventsMetricsEventModel = {
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
