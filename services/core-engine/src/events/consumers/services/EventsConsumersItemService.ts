import { EventsConsumersItemModel, EventsConsumersItemValidator } from "@nexora/types/domains/events/consumers/EventsConsumersItem";

export class EventsConsumersItemService {
  private repository = new Map<string, EventsConsumersItemModel>();

  public create(data: Omit<EventsConsumersItemModel, "id" | "version" | "createdAt" | "updatedAt">): EventsConsumersItemModel {
    const id = "even_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: EventsConsumersItemModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = EventsConsumersItemValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for EventsConsumersItem: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): EventsConsumersItemModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: EventsConsumersItemModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<EventsConsumersItemModel>): EventsConsumersItemModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: EventsConsumersItemModel = {
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
