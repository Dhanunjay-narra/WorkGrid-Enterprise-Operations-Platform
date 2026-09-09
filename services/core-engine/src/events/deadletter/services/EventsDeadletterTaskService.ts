import { EventsDeadletterTaskModel, EventsDeadletterTaskValidator } from "@nexora/types/domains/events/deadletter/EventsDeadletterTask";

export class EventsDeadletterTaskService {
  private repository = new Map<string, EventsDeadletterTaskModel>();

  public create(data: Omit<EventsDeadletterTaskModel, "id" | "version" | "createdAt" | "updatedAt">): EventsDeadletterTaskModel {
    const id = "even_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: EventsDeadletterTaskModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = EventsDeadletterTaskValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for EventsDeadletterTask: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): EventsDeadletterTaskModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: EventsDeadletterTaskModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<EventsDeadletterTaskModel>): EventsDeadletterTaskModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: EventsDeadletterTaskModel = {
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
