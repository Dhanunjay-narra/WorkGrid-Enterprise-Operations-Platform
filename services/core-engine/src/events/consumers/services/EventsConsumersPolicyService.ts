import { EventsConsumersPolicyModel, EventsConsumersPolicyValidator } from "@nexora/types/domains/events/consumers/EventsConsumersPolicy";

export class EventsConsumersPolicyService {
  private repository = new Map<string, EventsConsumersPolicyModel>();

  public create(data: Omit<EventsConsumersPolicyModel, "id" | "version" | "createdAt" | "updatedAt">): EventsConsumersPolicyModel {
    const id = "even_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: EventsConsumersPolicyModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = EventsConsumersPolicyValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for EventsConsumersPolicy: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): EventsConsumersPolicyModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: EventsConsumersPolicyModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<EventsConsumersPolicyModel>): EventsConsumersPolicyModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: EventsConsumersPolicyModel = {
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
