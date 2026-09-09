import { EventsMetricsNodeModel, EventsMetricsNodeValidator } from "@nexora/types/domains/events/metrics/EventsMetricsNode";

export class EventsMetricsNodeService {
  private repository = new Map<string, EventsMetricsNodeModel>();

  public create(data: Omit<EventsMetricsNodeModel, "id" | "version" | "createdAt" | "updatedAt">): EventsMetricsNodeModel {
    const id = "even_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: EventsMetricsNodeModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = EventsMetricsNodeValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for EventsMetricsNode: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): EventsMetricsNodeModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: EventsMetricsNodeModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<EventsMetricsNodeModel>): EventsMetricsNodeModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: EventsMetricsNodeModel = {
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
