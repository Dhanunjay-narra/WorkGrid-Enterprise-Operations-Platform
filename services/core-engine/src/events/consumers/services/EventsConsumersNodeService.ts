import { EventsConsumersNodeModel, EventsConsumersNodeValidator } from "@nexora/types/domains/events/consumers/EventsConsumersNode";

export class EventsConsumersNodeService {
  private repository = new Map<string, EventsConsumersNodeModel>();

  public create(data: Omit<EventsConsumersNodeModel, "id" | "version" | "createdAt" | "updatedAt">): EventsConsumersNodeModel {
    const id = "even_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: EventsConsumersNodeModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = EventsConsumersNodeValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for EventsConsumersNode: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): EventsConsumersNodeModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: EventsConsumersNodeModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<EventsConsumersNodeModel>): EventsConsumersNodeModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: EventsConsumersNodeModel = {
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
