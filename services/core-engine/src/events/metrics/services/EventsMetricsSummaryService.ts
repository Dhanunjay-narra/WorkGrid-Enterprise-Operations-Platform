import { EventsMetricsSummaryModel, EventsMetricsSummaryValidator } from "@nexora/types/domains/events/metrics/EventsMetricsSummary";

export class EventsMetricsSummaryService {
  private repository = new Map<string, EventsMetricsSummaryModel>();

  public create(data: Omit<EventsMetricsSummaryModel, "id" | "version" | "createdAt" | "updatedAt">): EventsMetricsSummaryModel {
    const id = "even_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: EventsMetricsSummaryModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = EventsMetricsSummaryValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for EventsMetricsSummary: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): EventsMetricsSummaryModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: EventsMetricsSummaryModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<EventsMetricsSummaryModel>): EventsMetricsSummaryModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: EventsMetricsSummaryModel = {
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
