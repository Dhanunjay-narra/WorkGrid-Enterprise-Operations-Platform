import { EventsOutboxStateModel, EventsOutboxStateValidator } from "@nexora/types/domains/events/outbox/EventsOutboxState";

export class EventsOutboxStateService {
  private repository = new Map<string, EventsOutboxStateModel>();

  public create(data: Omit<EventsOutboxStateModel, "id" | "version" | "createdAt" | "updatedAt">): EventsOutboxStateModel {
    const id = "even_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: EventsOutboxStateModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = EventsOutboxStateValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for EventsOutboxState: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): EventsOutboxStateModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: EventsOutboxStateModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<EventsOutboxStateModel>): EventsOutboxStateModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: EventsOutboxStateModel = {
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
