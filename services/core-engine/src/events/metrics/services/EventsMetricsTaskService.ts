import { EventsMetricsTaskModel, EventsMetricsTaskValidator } from "@nexora/types/domains/events/metrics/EventsMetricsTask";

export class EventsMetricsTaskService {
  private repository = new Map<string, EventsMetricsTaskModel>();

  public create(data: Omit<EventsMetricsTaskModel, "id" | "version" | "createdAt" | "updatedAt">): EventsMetricsTaskModel {
    const id = "even_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: EventsMetricsTaskModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = EventsMetricsTaskValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for EventsMetricsTask: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): EventsMetricsTaskModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: EventsMetricsTaskModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<EventsMetricsTaskModel>): EventsMetricsTaskModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: EventsMetricsTaskModel = {
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
