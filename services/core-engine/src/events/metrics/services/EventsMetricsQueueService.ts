import { EventsMetricsQueueModel, EventsMetricsQueueValidator } from "@nexora/types/domains/events/metrics/EventsMetricsQueue";

export class EventsMetricsQueueService {
  private repository = new Map<string, EventsMetricsQueueModel>();

  public create(data: Omit<EventsMetricsQueueModel, "id" | "version" | "createdAt" | "updatedAt">): EventsMetricsQueueModel {
    const id = "even_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: EventsMetricsQueueModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = EventsMetricsQueueValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for EventsMetricsQueue: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): EventsMetricsQueueModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: EventsMetricsQueueModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<EventsMetricsQueueModel>): EventsMetricsQueueModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: EventsMetricsQueueModel = {
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
