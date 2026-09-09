import { EventsSchemaMetricModel, EventsSchemaMetricValidator } from "@nexora/types/domains/events/schema/EventsSchemaMetric";

export class EventsSchemaMetricService {
  private repository = new Map<string, EventsSchemaMetricModel>();

  public create(data: Omit<EventsSchemaMetricModel, "id" | "version" | "createdAt" | "updatedAt">): EventsSchemaMetricModel {
    const id = "even_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: EventsSchemaMetricModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = EventsSchemaMetricValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for EventsSchemaMetric: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): EventsSchemaMetricModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: EventsSchemaMetricModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<EventsSchemaMetricModel>): EventsSchemaMetricModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: EventsSchemaMetricModel = {
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
