import { EventsConsumersSnapshotModel, EventsConsumersSnapshotValidator } from "@nexora/types/domains/events/consumers/EventsConsumersSnapshot";

export class EventsConsumersSnapshotService {
  private repository = new Map<string, EventsConsumersSnapshotModel>();

  public create(data: Omit<EventsConsumersSnapshotModel, "id" | "version" | "createdAt" | "updatedAt">): EventsConsumersSnapshotModel {
    const id = "even_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: EventsConsumersSnapshotModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = EventsConsumersSnapshotValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for EventsConsumersSnapshot: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): EventsConsumersSnapshotModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: EventsConsumersSnapshotModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<EventsConsumersSnapshotModel>): EventsConsumersSnapshotModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: EventsConsumersSnapshotModel = {
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
