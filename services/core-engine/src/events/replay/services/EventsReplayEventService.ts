import { EventsReplayEventModel, EventsReplayEventValidator } from "@nexora/types/domains/events/replay/EventsReplayEvent";

export class EventsReplayEventService {
  private repository = new Map<string, EventsReplayEventModel>();

  public create(data: Omit<EventsReplayEventModel, "id" | "version" | "createdAt" | "updatedAt">): EventsReplayEventModel {
    const id = "even_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: EventsReplayEventModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = EventsReplayEventValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for EventsReplayEvent: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): EventsReplayEventModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: EventsReplayEventModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<EventsReplayEventModel>): EventsReplayEventModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: EventsReplayEventModel = {
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
