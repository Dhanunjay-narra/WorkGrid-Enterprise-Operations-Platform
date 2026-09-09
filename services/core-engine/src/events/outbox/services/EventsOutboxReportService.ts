import { EventsOutboxReportModel, EventsOutboxReportValidator } from "@nexora/types/domains/events/outbox/EventsOutboxReport";

export class EventsOutboxReportService {
  private repository = new Map<string, EventsOutboxReportModel>();

  public create(data: Omit<EventsOutboxReportModel, "id" | "version" | "createdAt" | "updatedAt">): EventsOutboxReportModel {
    const id = "even_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: EventsOutboxReportModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = EventsOutboxReportValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for EventsOutboxReport: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): EventsOutboxReportModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: EventsOutboxReportModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<EventsOutboxReportModel>): EventsOutboxReportModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: EventsOutboxReportModel = {
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
