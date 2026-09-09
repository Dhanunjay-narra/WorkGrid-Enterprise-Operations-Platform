import { EventsMetricsReportModel, EventsMetricsReportValidator } from "@nexora/types/domains/events/metrics/EventsMetricsReport";

export class EventsMetricsReportService {
  private repository = new Map<string, EventsMetricsReportModel>();

  public create(data: Omit<EventsMetricsReportModel, "id" | "version" | "createdAt" | "updatedAt">): EventsMetricsReportModel {
    const id = "even_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: EventsMetricsReportModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = EventsMetricsReportValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for EventsMetricsReport: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): EventsMetricsReportModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: EventsMetricsReportModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<EventsMetricsReportModel>): EventsMetricsReportModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: EventsMetricsReportModel = {
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
