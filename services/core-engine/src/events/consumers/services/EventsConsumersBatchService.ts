import { EventsConsumersBatchModel, EventsConsumersBatchValidator } from "@nexora/types/domains/events/consumers/EventsConsumersBatch";

export class EventsConsumersBatchService {
  private repository = new Map<string, EventsConsumersBatchModel>();

  public create(data: Omit<EventsConsumersBatchModel, "id" | "version" | "createdAt" | "updatedAt">): EventsConsumersBatchModel {
    const id = "even_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: EventsConsumersBatchModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = EventsConsumersBatchValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for EventsConsumersBatch: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): EventsConsumersBatchModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: EventsConsumersBatchModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<EventsConsumersBatchModel>): EventsConsumersBatchModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: EventsConsumersBatchModel = {
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
