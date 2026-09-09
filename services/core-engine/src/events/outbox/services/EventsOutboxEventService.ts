import { EventsOutboxEventModel, EventsOutboxEventValidator } from "@nexora/types/domains/events/outbox/EventsOutboxEvent";

export class EventsOutboxEventService {
  private repository = new Map<string, EventsOutboxEventModel>();

  public create(data: Omit<EventsOutboxEventModel, "id" | "version" | "createdAt" | "updatedAt">): EventsOutboxEventModel {
    const id = "even_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: EventsOutboxEventModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = EventsOutboxEventValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for EventsOutboxEvent: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): EventsOutboxEventModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: EventsOutboxEventModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<EventsOutboxEventModel>): EventsOutboxEventModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: EventsOutboxEventModel = {
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
