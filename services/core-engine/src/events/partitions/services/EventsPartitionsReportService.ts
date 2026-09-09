import { EventsPartitionsReportModel, EventsPartitionsReportValidator } from "@nexora/types/domains/events/partitions/EventsPartitionsReport";

export class EventsPartitionsReportService {
  private repository = new Map<string, EventsPartitionsReportModel>();

  public create(data: Omit<EventsPartitionsReportModel, "id" | "version" | "createdAt" | "updatedAt">): EventsPartitionsReportModel {
    const id = "even_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: EventsPartitionsReportModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = EventsPartitionsReportValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for EventsPartitionsReport: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): EventsPartitionsReportModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: EventsPartitionsReportModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<EventsPartitionsReportModel>): EventsPartitionsReportModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: EventsPartitionsReportModel = {
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
