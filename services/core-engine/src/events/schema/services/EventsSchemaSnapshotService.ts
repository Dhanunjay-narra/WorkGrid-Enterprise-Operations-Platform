import { EventsSchemaSnapshotModel, EventsSchemaSnapshotValidator } from "@nexora/types/domains/events/schema/EventsSchemaSnapshot";

export class EventsSchemaSnapshotService {
  private repository = new Map<string, EventsSchemaSnapshotModel>();

  public create(data: Omit<EventsSchemaSnapshotModel, "id" | "version" | "createdAt" | "updatedAt">): EventsSchemaSnapshotModel {
    const id = "even_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: EventsSchemaSnapshotModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = EventsSchemaSnapshotValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for EventsSchemaSnapshot: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): EventsSchemaSnapshotModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: EventsSchemaSnapshotModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<EventsSchemaSnapshotModel>): EventsSchemaSnapshotModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: EventsSchemaSnapshotModel = {
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
