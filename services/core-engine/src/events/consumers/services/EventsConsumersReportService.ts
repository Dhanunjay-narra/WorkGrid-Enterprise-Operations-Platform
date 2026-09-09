import { EventsConsumersReportModel, EventsConsumersReportValidator } from "@nexora/types/domains/events/consumers/EventsConsumersReport";

export class EventsConsumersReportService {
  private repository = new Map<string, EventsConsumersReportModel>();

  public create(data: Omit<EventsConsumersReportModel, "id" | "version" | "createdAt" | "updatedAt">): EventsConsumersReportModel {
    const id = "even_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: EventsConsumersReportModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = EventsConsumersReportValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for EventsConsumersReport: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): EventsConsumersReportModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: EventsConsumersReportModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<EventsConsumersReportModel>): EventsConsumersReportModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: EventsConsumersReportModel = {
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
