import { EventsConsumersMappingModel, EventsConsumersMappingValidator } from "@nexora/types/domains/events/consumers/EventsConsumersMapping";

export class EventsConsumersMappingService {
  private repository = new Map<string, EventsConsumersMappingModel>();

  public create(data: Omit<EventsConsumersMappingModel, "id" | "version" | "createdAt" | "updatedAt">): EventsConsumersMappingModel {
    const id = "even_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: EventsConsumersMappingModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = EventsConsumersMappingValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for EventsConsumersMapping: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): EventsConsumersMappingModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: EventsConsumersMappingModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<EventsConsumersMappingModel>): EventsConsumersMappingModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: EventsConsumersMappingModel = {
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
