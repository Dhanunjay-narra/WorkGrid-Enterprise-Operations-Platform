import { EventsReplayItemModel, EventsReplayItemValidator } from "@nexora/types/domains/events/replay/EventsReplayItem";

export class EventsReplayItemService {
  private repository = new Map<string, EventsReplayItemModel>();

  public create(data: Omit<EventsReplayItemModel, "id" | "version" | "createdAt" | "updatedAt">): EventsReplayItemModel {
    const id = "even_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: EventsReplayItemModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = EventsReplayItemValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for EventsReplayItem: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): EventsReplayItemModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: EventsReplayItemModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<EventsReplayItemModel>): EventsReplayItemModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: EventsReplayItemModel = {
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
