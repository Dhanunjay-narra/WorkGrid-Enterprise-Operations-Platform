import { EventsDeadletterItemModel, EventsDeadletterItemValidator } from "@nexora/types/domains/events/deadletter/EventsDeadletterItem";

export class EventsDeadletterItemService {
  private repository = new Map<string, EventsDeadletterItemModel>();

  public create(data: Omit<EventsDeadletterItemModel, "id" | "version" | "createdAt" | "updatedAt">): EventsDeadletterItemModel {
    const id = "even_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: EventsDeadletterItemModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = EventsDeadletterItemValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for EventsDeadletterItem: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): EventsDeadletterItemModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: EventsDeadletterItemModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<EventsDeadletterItemModel>): EventsDeadletterItemModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: EventsDeadletterItemModel = {
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
