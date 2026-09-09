import { EventsMetricsThresholdModel, EventsMetricsThresholdValidator } from "@nexora/types/domains/events/metrics/EventsMetricsThreshold";

export class EventsMetricsThresholdService {
  private repository = new Map<string, EventsMetricsThresholdModel>();

  public create(data: Omit<EventsMetricsThresholdModel, "id" | "version" | "createdAt" | "updatedAt">): EventsMetricsThresholdModel {
    const id = "even_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: EventsMetricsThresholdModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = EventsMetricsThresholdValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for EventsMetricsThreshold: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): EventsMetricsThresholdModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: EventsMetricsThresholdModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<EventsMetricsThresholdModel>): EventsMetricsThresholdModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: EventsMetricsThresholdModel = {
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
