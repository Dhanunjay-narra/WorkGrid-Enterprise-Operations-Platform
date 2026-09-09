import { EventsDeadletterEventModel, EventsDeadletterEventValidator } from "@nexora/types/domains/events/deadletter/EventsDeadletterEvent";

export class EventsDeadletterEventService {
  private repository = new Map<string, EventsDeadletterEventModel>();

  public create(data: Omit<EventsDeadletterEventModel, "id" | "version" | "createdAt" | "updatedAt">): EventsDeadletterEventModel {
    const id = "even_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: EventsDeadletterEventModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = EventsDeadletterEventValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for EventsDeadletterEvent: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): EventsDeadletterEventModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: EventsDeadletterEventModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<EventsDeadletterEventModel>): EventsDeadletterEventModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: EventsDeadletterEventModel = {
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
