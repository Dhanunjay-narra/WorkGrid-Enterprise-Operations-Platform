import { EventsOutboxSessionModel, EventsOutboxSessionValidator } from "@nexora/types/domains/events/outbox/EventsOutboxSession";

export class EventsOutboxSessionService {
  private repository = new Map<string, EventsOutboxSessionModel>();

  public create(data: Omit<EventsOutboxSessionModel, "id" | "version" | "createdAt" | "updatedAt">): EventsOutboxSessionModel {
    const id = "even_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: EventsOutboxSessionModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = EventsOutboxSessionValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for EventsOutboxSession: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): EventsOutboxSessionModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: EventsOutboxSessionModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<EventsOutboxSessionModel>): EventsOutboxSessionModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: EventsOutboxSessionModel = {
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
