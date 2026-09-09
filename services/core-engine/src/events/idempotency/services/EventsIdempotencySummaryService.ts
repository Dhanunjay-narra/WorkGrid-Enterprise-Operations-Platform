import { EventsIdempotencySummaryModel, EventsIdempotencySummaryValidator } from "@nexora/types/domains/events/idempotency/EventsIdempotencySummary";

export class EventsIdempotencySummaryService {
  private repository = new Map<string, EventsIdempotencySummaryModel>();

  public create(data: Omit<EventsIdempotencySummaryModel, "id" | "version" | "createdAt" | "updatedAt">): EventsIdempotencySummaryModel {
    const id = "even_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: EventsIdempotencySummaryModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = EventsIdempotencySummaryValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for EventsIdempotencySummary: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): EventsIdempotencySummaryModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: EventsIdempotencySummaryModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<EventsIdempotencySummaryModel>): EventsIdempotencySummaryModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: EventsIdempotencySummaryModel = {
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
