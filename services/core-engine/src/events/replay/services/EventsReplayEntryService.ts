import { EventsReplayEntryModel, EventsReplayEntryValidator } from "@nexora/types/domains/events/replay/EventsReplayEntry";

export class EventsReplayEntryService {
  private repository = new Map<string, EventsReplayEntryModel>();

  public create(data: Omit<EventsReplayEntryModel, "id" | "version" | "createdAt" | "updatedAt">): EventsReplayEntryModel {
    const id = "even_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: EventsReplayEntryModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = EventsReplayEntryValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for EventsReplayEntry: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): EventsReplayEntryModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: EventsReplayEntryModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<EventsReplayEntryModel>): EventsReplayEntryModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: EventsReplayEntryModel = {
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
