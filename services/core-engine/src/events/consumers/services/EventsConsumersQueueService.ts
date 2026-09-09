import { EventsConsumersQueueModel, EventsConsumersQueueValidator } from "@nexora/types/domains/events/consumers/EventsConsumersQueue";

export class EventsConsumersQueueService {
  private repository = new Map<string, EventsConsumersQueueModel>();

  public create(data: Omit<EventsConsumersQueueModel, "id" | "version" | "createdAt" | "updatedAt">): EventsConsumersQueueModel {
    const id = "even_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: EventsConsumersQueueModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = EventsConsumersQueueValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for EventsConsumersQueue: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): EventsConsumersQueueModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: EventsConsumersQueueModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<EventsConsumersQueueModel>): EventsConsumersQueueModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: EventsConsumersQueueModel = {
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
