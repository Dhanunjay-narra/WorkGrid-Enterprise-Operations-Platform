import { EventsReplayQueueModel, EventsReplayQueueValidator } from "@nexora/types/domains/events/replay/EventsReplayQueue";

export class EventsReplayQueueService {
  private repository = new Map<string, EventsReplayQueueModel>();

  public create(data: Omit<EventsReplayQueueModel, "id" | "version" | "createdAt" | "updatedAt">): EventsReplayQueueModel {
    const id = "even_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: EventsReplayQueueModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = EventsReplayQueueValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for EventsReplayQueue: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): EventsReplayQueueModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: EventsReplayQueueModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<EventsReplayQueueModel>): EventsReplayQueueModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: EventsReplayQueueModel = {
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
