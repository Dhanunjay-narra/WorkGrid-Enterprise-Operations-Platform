import { EventsMetricsItemModel, EventsMetricsItemValidator } from "@nexora/types/domains/events/metrics/EventsMetricsItem";

export class EventsMetricsItemService {
  private repository = new Map<string, EventsMetricsItemModel>();

  public create(data: Omit<EventsMetricsItemModel, "id" | "version" | "createdAt" | "updatedAt">): EventsMetricsItemModel {
    const id = "even_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: EventsMetricsItemModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = EventsMetricsItemValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for EventsMetricsItem: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): EventsMetricsItemModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: EventsMetricsItemModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<EventsMetricsItemModel>): EventsMetricsItemModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: EventsMetricsItemModel = {
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
