import { EventsDeadletterSessionModel, EventsDeadletterSessionValidator } from "@nexora/types/domains/events/deadletter/EventsDeadletterSession";

export class EventsDeadletterSessionService {
  private repository = new Map<string, EventsDeadletterSessionModel>();

  public create(data: Omit<EventsDeadletterSessionModel, "id" | "version" | "createdAt" | "updatedAt">): EventsDeadletterSessionModel {
    const id = "even_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: EventsDeadletterSessionModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = EventsDeadletterSessionValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for EventsDeadletterSession: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): EventsDeadletterSessionModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: EventsDeadletterSessionModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<EventsDeadletterSessionModel>): EventsDeadletterSessionModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: EventsDeadletterSessionModel = {
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
