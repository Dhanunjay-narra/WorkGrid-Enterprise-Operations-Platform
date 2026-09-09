import { EventsMetricsBatchModel, EventsMetricsBatchValidator } from "@nexora/types/domains/events/metrics/EventsMetricsBatch";

export class EventsMetricsBatchService {
  private repository = new Map<string, EventsMetricsBatchModel>();

  public create(data: Omit<EventsMetricsBatchModel, "id" | "version" | "createdAt" | "updatedAt">): EventsMetricsBatchModel {
    const id = "even_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: EventsMetricsBatchModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = EventsMetricsBatchValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for EventsMetricsBatch: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): EventsMetricsBatchModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: EventsMetricsBatchModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<EventsMetricsBatchModel>): EventsMetricsBatchModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: EventsMetricsBatchModel = {
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
