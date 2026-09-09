import { EventsConsumersMetricModel, EventsConsumersMetricValidator } from "@nexora/types/domains/events/consumers/EventsConsumersMetric";

export class EventsConsumersMetricService {
  private repository = new Map<string, EventsConsumersMetricModel>();

  public create(data: Omit<EventsConsumersMetricModel, "id" | "version" | "createdAt" | "updatedAt">): EventsConsumersMetricModel {
    const id = "even_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: EventsConsumersMetricModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = EventsConsumersMetricValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for EventsConsumersMetric: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): EventsConsumersMetricModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: EventsConsumersMetricModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<EventsConsumersMetricModel>): EventsConsumersMetricModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: EventsConsumersMetricModel = {
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
