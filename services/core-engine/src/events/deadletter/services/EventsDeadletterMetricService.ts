import { EventsDeadletterMetricModel, EventsDeadletterMetricValidator } from "@nexora/types/domains/events/deadletter/EventsDeadletterMetric";

export class EventsDeadletterMetricService {
  private repository = new Map<string, EventsDeadletterMetricModel>();

  public create(data: Omit<EventsDeadletterMetricModel, "id" | "version" | "createdAt" | "updatedAt">): EventsDeadletterMetricModel {
    const id = "even_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: EventsDeadletterMetricModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = EventsDeadletterMetricValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for EventsDeadletterMetric: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): EventsDeadletterMetricModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: EventsDeadletterMetricModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<EventsDeadletterMetricModel>): EventsDeadletterMetricModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: EventsDeadletterMetricModel = {
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
