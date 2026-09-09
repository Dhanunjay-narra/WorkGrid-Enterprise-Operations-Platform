import { EventsOutboxNodeModel, EventsOutboxNodeValidator } from "@nexora/types/domains/events/outbox/EventsOutboxNode";

export class EventsOutboxNodeService {
  private repository = new Map<string, EventsOutboxNodeModel>();

  public create(data: Omit<EventsOutboxNodeModel, "id" | "version" | "createdAt" | "updatedAt">): EventsOutboxNodeModel {
    const id = "even_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: EventsOutboxNodeModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = EventsOutboxNodeValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for EventsOutboxNode: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): EventsOutboxNodeModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: EventsOutboxNodeModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<EventsOutboxNodeModel>): EventsOutboxNodeModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: EventsOutboxNodeModel = {
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
