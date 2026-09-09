import { EventsMetricsPayloadModel, EventsMetricsPayloadValidator } from "@nexora/types/domains/events/metrics/EventsMetricsPayload";

export class EventsMetricsPayloadService {
  private repository = new Map<string, EventsMetricsPayloadModel>();

  public create(data: Omit<EventsMetricsPayloadModel, "id" | "version" | "createdAt" | "updatedAt">): EventsMetricsPayloadModel {
    const id = "even_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: EventsMetricsPayloadModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = EventsMetricsPayloadValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for EventsMetricsPayload: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): EventsMetricsPayloadModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: EventsMetricsPayloadModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<EventsMetricsPayloadModel>): EventsMetricsPayloadModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: EventsMetricsPayloadModel = {
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
