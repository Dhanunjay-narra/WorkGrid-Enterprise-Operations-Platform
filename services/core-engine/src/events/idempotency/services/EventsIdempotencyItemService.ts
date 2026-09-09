import { EventsIdempotencyItemModel, EventsIdempotencyItemValidator } from "@nexora/types/domains/events/idempotency/EventsIdempotencyItem";

export class EventsIdempotencyItemService {
  private repository = new Map<string, EventsIdempotencyItemModel>();

  public create(data: Omit<EventsIdempotencyItemModel, "id" | "version" | "createdAt" | "updatedAt">): EventsIdempotencyItemModel {
    const id = "even_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: EventsIdempotencyItemModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = EventsIdempotencyItemValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for EventsIdempotencyItem: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): EventsIdempotencyItemModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: EventsIdempotencyItemModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<EventsIdempotencyItemModel>): EventsIdempotencyItemModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: EventsIdempotencyItemModel = {
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
