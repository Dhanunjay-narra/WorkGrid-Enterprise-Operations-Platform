import { EventsDeadletterNodeModel, EventsDeadletterNodeValidator } from "@nexora/types/domains/events/deadletter/EventsDeadletterNode";

export class EventsDeadletterNodeService {
  private repository = new Map<string, EventsDeadletterNodeModel>();

  public create(data: Omit<EventsDeadletterNodeModel, "id" | "version" | "createdAt" | "updatedAt">): EventsDeadletterNodeModel {
    const id = "even_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: EventsDeadletterNodeModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = EventsDeadletterNodeValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for EventsDeadletterNode: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): EventsDeadletterNodeModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: EventsDeadletterNodeModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<EventsDeadletterNodeModel>): EventsDeadletterNodeModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: EventsDeadletterNodeModel = {
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
