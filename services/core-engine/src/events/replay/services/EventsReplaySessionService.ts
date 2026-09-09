import { EventsReplaySessionModel, EventsReplaySessionValidator } from "@nexora/types/domains/events/replay/EventsReplaySession";

export class EventsReplaySessionService {
  private repository = new Map<string, EventsReplaySessionModel>();

  public create(data: Omit<EventsReplaySessionModel, "id" | "version" | "createdAt" | "updatedAt">): EventsReplaySessionModel {
    const id = "even_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: EventsReplaySessionModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = EventsReplaySessionValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for EventsReplaySession: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): EventsReplaySessionModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: EventsReplaySessionModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<EventsReplaySessionModel>): EventsReplaySessionModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: EventsReplaySessionModel = {
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
