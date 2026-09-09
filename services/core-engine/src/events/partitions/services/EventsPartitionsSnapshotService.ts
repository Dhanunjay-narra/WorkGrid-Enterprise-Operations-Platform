import { EventsPartitionsSnapshotModel, EventsPartitionsSnapshotValidator } from "@nexora/types/domains/events/partitions/EventsPartitionsSnapshot";

export class EventsPartitionsSnapshotService {
  private repository = new Map<string, EventsPartitionsSnapshotModel>();

  public create(data: Omit<EventsPartitionsSnapshotModel, "id" | "version" | "createdAt" | "updatedAt">): EventsPartitionsSnapshotModel {
    const id = "even_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: EventsPartitionsSnapshotModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = EventsPartitionsSnapshotValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for EventsPartitionsSnapshot: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): EventsPartitionsSnapshotModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: EventsPartitionsSnapshotModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<EventsPartitionsSnapshotModel>): EventsPartitionsSnapshotModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: EventsPartitionsSnapshotModel = {
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
