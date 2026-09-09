import { EventsMetricsRecordModel, EventsMetricsRecordValidator } from "@nexora/types/domains/events/metrics/EventsMetricsRecord";

export class EventsMetricsRecordService {
  private repository = new Map<string, EventsMetricsRecordModel>();

  public create(data: Omit<EventsMetricsRecordModel, "id" | "version" | "createdAt" | "updatedAt">): EventsMetricsRecordModel {
    const id = "even_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: EventsMetricsRecordModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = EventsMetricsRecordValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for EventsMetricsRecord: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): EventsMetricsRecordModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: EventsMetricsRecordModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<EventsMetricsRecordModel>): EventsMetricsRecordModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: EventsMetricsRecordModel = {
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
