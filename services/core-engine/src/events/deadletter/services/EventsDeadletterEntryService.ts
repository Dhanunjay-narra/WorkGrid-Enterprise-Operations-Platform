import { EventsDeadletterEntryModel, EventsDeadletterEntryValidator } from "@nexora/types/domains/events/deadletter/EventsDeadletterEntry";

export class EventsDeadletterEntryService {
  private repository = new Map<string, EventsDeadletterEntryModel>();

  public create(data: Omit<EventsDeadletterEntryModel, "id" | "version" | "createdAt" | "updatedAt">): EventsDeadletterEntryModel {
    const id = "even_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: EventsDeadletterEntryModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = EventsDeadletterEntryValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for EventsDeadletterEntry: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): EventsDeadletterEntryModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: EventsDeadletterEntryModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<EventsDeadletterEntryModel>): EventsDeadletterEntryModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: EventsDeadletterEntryModel = {
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
