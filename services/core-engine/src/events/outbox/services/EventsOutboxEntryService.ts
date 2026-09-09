import { EventsOutboxEntryModel, EventsOutboxEntryValidator } from "@nexora/types/domains/events/outbox/EventsOutboxEntry";

export class EventsOutboxEntryService {
  private repository = new Map<string, EventsOutboxEntryModel>();

  public create(data: Omit<EventsOutboxEntryModel, "id" | "version" | "createdAt" | "updatedAt">): EventsOutboxEntryModel {
    const id = "even_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: EventsOutboxEntryModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = EventsOutboxEntryValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for EventsOutboxEntry: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): EventsOutboxEntryModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: EventsOutboxEntryModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<EventsOutboxEntryModel>): EventsOutboxEntryModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: EventsOutboxEntryModel = {
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
