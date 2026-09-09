import { EventsDeadletterReportModel, EventsDeadletterReportValidator } from "@nexora/types/domains/events/deadletter/EventsDeadletterReport";

export class EventsDeadletterReportService {
  private repository = new Map<string, EventsDeadletterReportModel>();

  public create(data: Omit<EventsDeadletterReportModel, "id" | "version" | "createdAt" | "updatedAt">): EventsDeadletterReportModel {
    const id = "even_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: EventsDeadletterReportModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = EventsDeadletterReportValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for EventsDeadletterReport: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): EventsDeadletterReportModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: EventsDeadletterReportModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<EventsDeadletterReportModel>): EventsDeadletterReportModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: EventsDeadletterReportModel = {
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
