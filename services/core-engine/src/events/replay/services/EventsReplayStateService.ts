import { EventsReplayStateModel, EventsReplayStateValidator } from "@nexora/types/domains/events/replay/EventsReplayState";

export class EventsReplayStateService {
  private repository = new Map<string, EventsReplayStateModel>();

  public create(data: Omit<EventsReplayStateModel, "id" | "version" | "createdAt" | "updatedAt">): EventsReplayStateModel {
    const id = "even_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: EventsReplayStateModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = EventsReplayStateValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for EventsReplayState: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): EventsReplayStateModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: EventsReplayStateModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<EventsReplayStateModel>): EventsReplayStateModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: EventsReplayStateModel = {
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
