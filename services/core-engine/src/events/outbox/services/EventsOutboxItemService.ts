import { EventsOutboxItemModel, EventsOutboxItemValidator } from "@nexora/types/domains/events/outbox/EventsOutboxItem";

export class EventsOutboxItemService {
  private repository = new Map<string, EventsOutboxItemModel>();

  public create(data: Omit<EventsOutboxItemModel, "id" | "version" | "createdAt" | "updatedAt">): EventsOutboxItemModel {
    const id = "even_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: EventsOutboxItemModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = EventsOutboxItemValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for EventsOutboxItem: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): EventsOutboxItemModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: EventsOutboxItemModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<EventsOutboxItemModel>): EventsOutboxItemModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: EventsOutboxItemModel = {
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
