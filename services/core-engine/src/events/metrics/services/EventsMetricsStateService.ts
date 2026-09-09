import { EventsMetricsStateModel, EventsMetricsStateValidator } from "@nexora/types/domains/events/metrics/EventsMetricsState";

export class EventsMetricsStateService {
  private repository = new Map<string, EventsMetricsStateModel>();

  public create(data: Omit<EventsMetricsStateModel, "id" | "version" | "createdAt" | "updatedAt">): EventsMetricsStateModel {
    const id = "even_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: EventsMetricsStateModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = EventsMetricsStateValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for EventsMetricsState: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): EventsMetricsStateModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: EventsMetricsStateModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<EventsMetricsStateModel>): EventsMetricsStateModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: EventsMetricsStateModel = {
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
