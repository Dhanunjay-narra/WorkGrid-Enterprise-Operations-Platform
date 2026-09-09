import { EventsIdempotencySessionModel, EventsIdempotencySessionValidator } from "@nexora/types/domains/events/idempotency/EventsIdempotencySession";

export class EventsIdempotencySessionService {
  private repository = new Map<string, EventsIdempotencySessionModel>();

  public create(data: Omit<EventsIdempotencySessionModel, "id" | "version" | "createdAt" | "updatedAt">): EventsIdempotencySessionModel {
    const id = "even_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: EventsIdempotencySessionModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = EventsIdempotencySessionValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for EventsIdempotencySession: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): EventsIdempotencySessionModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: EventsIdempotencySessionModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<EventsIdempotencySessionModel>): EventsIdempotencySessionModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: EventsIdempotencySessionModel = {
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
