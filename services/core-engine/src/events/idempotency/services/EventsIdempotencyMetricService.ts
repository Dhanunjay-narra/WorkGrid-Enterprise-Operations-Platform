import { EventsIdempotencyMetricModel, EventsIdempotencyMetricValidator } from "@nexora/types/domains/events/idempotency/EventsIdempotencyMetric";

export class EventsIdempotencyMetricService {
  private repository = new Map<string, EventsIdempotencyMetricModel>();

  public create(data: Omit<EventsIdempotencyMetricModel, "id" | "version" | "createdAt" | "updatedAt">): EventsIdempotencyMetricModel {
    const id = "even_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: EventsIdempotencyMetricModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = EventsIdempotencyMetricValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for EventsIdempotencyMetric: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): EventsIdempotencyMetricModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: EventsIdempotencyMetricModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<EventsIdempotencyMetricModel>): EventsIdempotencyMetricModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: EventsIdempotencyMetricModel = {
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
