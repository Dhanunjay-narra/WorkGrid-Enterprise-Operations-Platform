import { EventsOutboxRecordModel, EventsOutboxRecordValidator } from "@nexora/types/domains/events/outbox/EventsOutboxRecord";

export class EventsOutboxRecordService {
  private repository = new Map<string, EventsOutboxRecordModel>();

  public create(data: Omit<EventsOutboxRecordModel, "id" | "version" | "createdAt" | "updatedAt">): EventsOutboxRecordModel {
    const id = "even_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: EventsOutboxRecordModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = EventsOutboxRecordValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for EventsOutboxRecord: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): EventsOutboxRecordModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: EventsOutboxRecordModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<EventsOutboxRecordModel>): EventsOutboxRecordModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: EventsOutboxRecordModel = {
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
