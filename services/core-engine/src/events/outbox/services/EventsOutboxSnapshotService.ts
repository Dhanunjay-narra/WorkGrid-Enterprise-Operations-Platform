import { EventsOutboxSnapshotModel, EventsOutboxSnapshotValidator } from "@nexora/types/domains/events/outbox/EventsOutboxSnapshot";

export class EventsOutboxSnapshotService {
  private repository = new Map<string, EventsOutboxSnapshotModel>();

  public create(data: Omit<EventsOutboxSnapshotModel, "id" | "version" | "createdAt" | "updatedAt">): EventsOutboxSnapshotModel {
    const id = "even_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: EventsOutboxSnapshotModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = EventsOutboxSnapshotValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for EventsOutboxSnapshot: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): EventsOutboxSnapshotModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: EventsOutboxSnapshotModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<EventsOutboxSnapshotModel>): EventsOutboxSnapshotModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: EventsOutboxSnapshotModel = {
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
