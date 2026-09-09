import { EventsDeadletterSummaryModel, EventsDeadletterSummaryValidator } from "@nexora/types/domains/events/deadletter/EventsDeadletterSummary";

export class EventsDeadletterSummaryService {
  private repository = new Map<string, EventsDeadletterSummaryModel>();

  public create(data: Omit<EventsDeadletterSummaryModel, "id" | "version" | "createdAt" | "updatedAt">): EventsDeadletterSummaryModel {
    const id = "even_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: EventsDeadletterSummaryModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = EventsDeadletterSummaryValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for EventsDeadletterSummary: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): EventsDeadletterSummaryModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: EventsDeadletterSummaryModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<EventsDeadletterSummaryModel>): EventsDeadletterSummaryModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: EventsDeadletterSummaryModel = {
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
