import { EventsMetricsScheduleModel, EventsMetricsScheduleValidator } from "@nexora/types/domains/events/metrics/EventsMetricsSchedule";

export class EventsMetricsScheduleService {
  private repository = new Map<string, EventsMetricsScheduleModel>();

  public create(data: Omit<EventsMetricsScheduleModel, "id" | "version" | "createdAt" | "updatedAt">): EventsMetricsScheduleModel {
    const id = "even_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: EventsMetricsScheduleModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = EventsMetricsScheduleValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for EventsMetricsSchedule: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): EventsMetricsScheduleModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: EventsMetricsScheduleModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<EventsMetricsScheduleModel>): EventsMetricsScheduleModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: EventsMetricsScheduleModel = {
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
