import { EventsConsumersSummaryModel, EventsConsumersSummaryValidator } from "@nexora/types/domains/events/consumers/EventsConsumersSummary";

export class EventsConsumersSummaryService {
  private repository = new Map<string, EventsConsumersSummaryModel>();

  public create(data: Omit<EventsConsumersSummaryModel, "id" | "version" | "createdAt" | "updatedAt">): EventsConsumersSummaryModel {
    const id = "even_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: EventsConsumersSummaryModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = EventsConsumersSummaryValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for EventsConsumersSummary: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): EventsConsumersSummaryModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: EventsConsumersSummaryModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<EventsConsumersSummaryModel>): EventsConsumersSummaryModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: EventsConsumersSummaryModel = {
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
