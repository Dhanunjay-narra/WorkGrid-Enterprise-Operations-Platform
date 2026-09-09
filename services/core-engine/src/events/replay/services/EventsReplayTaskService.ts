import { EventsReplayTaskModel, EventsReplayTaskValidator } from "@nexora/types/domains/events/replay/EventsReplayTask";

export class EventsReplayTaskService {
  private repository = new Map<string, EventsReplayTaskModel>();

  public create(data: Omit<EventsReplayTaskModel, "id" | "version" | "createdAt" | "updatedAt">): EventsReplayTaskModel {
    const id = "even_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: EventsReplayTaskModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = EventsReplayTaskValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for EventsReplayTask: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): EventsReplayTaskModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: EventsReplayTaskModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<EventsReplayTaskModel>): EventsReplayTaskModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: EventsReplayTaskModel = {
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
