import { EventsIdempotencySnapshotModel, EventsIdempotencySnapshotValidator } from "@nexora/types/domains/events/idempotency/EventsIdempotencySnapshot";

export class EventsIdempotencySnapshotService {
  private repository = new Map<string, EventsIdempotencySnapshotModel>();

  public create(data: Omit<EventsIdempotencySnapshotModel, "id" | "version" | "createdAt" | "updatedAt">): EventsIdempotencySnapshotModel {
    const id = "even_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: EventsIdempotencySnapshotModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = EventsIdempotencySnapshotValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for EventsIdempotencySnapshot: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): EventsIdempotencySnapshotModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: EventsIdempotencySnapshotModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<EventsIdempotencySnapshotModel>): EventsIdempotencySnapshotModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: EventsIdempotencySnapshotModel = {
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
