import { EventsOutboxMetricModel, EventsOutboxMetricValidator } from "@nexora/types/domains/events/outbox/EventsOutboxMetric";

export class EventsOutboxMetricService {
  private repository = new Map<string, EventsOutboxMetricModel>();

  public create(data: Omit<EventsOutboxMetricModel, "id" | "version" | "createdAt" | "updatedAt">): EventsOutboxMetricModel {
    const id = "even_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: EventsOutboxMetricModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = EventsOutboxMetricValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for EventsOutboxMetric: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): EventsOutboxMetricModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: EventsOutboxMetricModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<EventsOutboxMetricModel>): EventsOutboxMetricModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: EventsOutboxMetricModel = {
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
