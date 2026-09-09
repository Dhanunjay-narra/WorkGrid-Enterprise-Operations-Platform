import { EventsMetricsSessionModel, EventsMetricsSessionValidator } from "@nexora/types/domains/events/metrics/EventsMetricsSession";

export class EventsMetricsSessionService {
  private repository = new Map<string, EventsMetricsSessionModel>();

  public create(data: Omit<EventsMetricsSessionModel, "id" | "version" | "createdAt" | "updatedAt">): EventsMetricsSessionModel {
    const id = "even_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: EventsMetricsSessionModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = EventsMetricsSessionValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for EventsMetricsSession: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): EventsMetricsSessionModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: EventsMetricsSessionModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<EventsMetricsSessionModel>): EventsMetricsSessionModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: EventsMetricsSessionModel = {
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
