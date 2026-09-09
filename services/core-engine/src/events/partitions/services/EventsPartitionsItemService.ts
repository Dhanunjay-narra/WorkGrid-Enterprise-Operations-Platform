import { EventsPartitionsItemModel, EventsPartitionsItemValidator } from "@nexora/types/domains/events/partitions/EventsPartitionsItem";

export class EventsPartitionsItemService {
  private repository = new Map<string, EventsPartitionsItemModel>();

  public create(data: Omit<EventsPartitionsItemModel, "id" | "version" | "createdAt" | "updatedAt">): EventsPartitionsItemModel {
    const id = "even_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: EventsPartitionsItemModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = EventsPartitionsItemValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for EventsPartitionsItem: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): EventsPartitionsItemModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: EventsPartitionsItemModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<EventsPartitionsItemModel>): EventsPartitionsItemModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: EventsPartitionsItemModel = {
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
