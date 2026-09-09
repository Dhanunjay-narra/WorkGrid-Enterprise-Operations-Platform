import { EventsReplayPayloadModel, EventsReplayPayloadValidator } from "@nexora/types/domains/events/replay/EventsReplayPayload";

export class EventsReplayPayloadService {
  private repository = new Map<string, EventsReplayPayloadModel>();

  public create(data: Omit<EventsReplayPayloadModel, "id" | "version" | "createdAt" | "updatedAt">): EventsReplayPayloadModel {
    const id = "even_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: EventsReplayPayloadModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = EventsReplayPayloadValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for EventsReplayPayload: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): EventsReplayPayloadModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: EventsReplayPayloadModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<EventsReplayPayloadModel>): EventsReplayPayloadModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: EventsReplayPayloadModel = {
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
