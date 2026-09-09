import { EventsOutboxSummaryModel, EventsOutboxSummaryValidator } from "@nexora/types/domains/events/outbox/EventsOutboxSummary";

export class EventsOutboxSummaryService {
  private repository = new Map<string, EventsOutboxSummaryModel>();

  public create(data: Omit<EventsOutboxSummaryModel, "id" | "version" | "createdAt" | "updatedAt">): EventsOutboxSummaryModel {
    const id = "even_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: EventsOutboxSummaryModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = EventsOutboxSummaryValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for EventsOutboxSummary: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): EventsOutboxSummaryModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: EventsOutboxSummaryModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<EventsOutboxSummaryModel>): EventsOutboxSummaryModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: EventsOutboxSummaryModel = {
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
