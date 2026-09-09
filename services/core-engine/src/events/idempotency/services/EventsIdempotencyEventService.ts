import { EventsIdempotencyEventModel, EventsIdempotencyEventValidator } from "@nexora/types/domains/events/idempotency/EventsIdempotencyEvent";

export class EventsIdempotencyEventService {
  private repository = new Map<string, EventsIdempotencyEventModel>();

  public create(data: Omit<EventsIdempotencyEventModel, "id" | "version" | "createdAt" | "updatedAt">): EventsIdempotencyEventModel {
    const id = "even_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: EventsIdempotencyEventModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = EventsIdempotencyEventValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for EventsIdempotencyEvent: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): EventsIdempotencyEventModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: EventsIdempotencyEventModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<EventsIdempotencyEventModel>): EventsIdempotencyEventModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: EventsIdempotencyEventModel = {
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
