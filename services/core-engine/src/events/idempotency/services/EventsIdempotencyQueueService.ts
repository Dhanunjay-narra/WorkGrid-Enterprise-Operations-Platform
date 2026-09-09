import { EventsIdempotencyQueueModel, EventsIdempotencyQueueValidator } from "@nexora/types/domains/events/idempotency/EventsIdempotencyQueue";

export class EventsIdempotencyQueueService {
  private repository = new Map<string, EventsIdempotencyQueueModel>();

  public create(data: Omit<EventsIdempotencyQueueModel, "id" | "version" | "createdAt" | "updatedAt">): EventsIdempotencyQueueModel {
    const id = "even_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: EventsIdempotencyQueueModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = EventsIdempotencyQueueValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for EventsIdempotencyQueue: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): EventsIdempotencyQueueModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: EventsIdempotencyQueueModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<EventsIdempotencyQueueModel>): EventsIdempotencyQueueModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: EventsIdempotencyQueueModel = {
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
