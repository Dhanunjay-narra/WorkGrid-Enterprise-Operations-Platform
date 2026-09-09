import { EventsConsumersTaskModel, EventsConsumersTaskValidator } from "@nexora/types/domains/events/consumers/EventsConsumersTask";

export class EventsConsumersTaskService {
  private repository = new Map<string, EventsConsumersTaskModel>();

  public create(data: Omit<EventsConsumersTaskModel, "id" | "version" | "createdAt" | "updatedAt">): EventsConsumersTaskModel {
    const id = "even_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: EventsConsumersTaskModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = EventsConsumersTaskValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for EventsConsumersTask: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): EventsConsumersTaskModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: EventsConsumersTaskModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<EventsConsumersTaskModel>): EventsConsumersTaskModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: EventsConsumersTaskModel = {
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
