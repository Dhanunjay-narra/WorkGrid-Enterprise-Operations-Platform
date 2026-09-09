import { EventsMetricsConfigModel, EventsMetricsConfigValidator } from "@nexora/types/domains/events/metrics/EventsMetricsConfig";

export class EventsMetricsConfigService {
  private repository = new Map<string, EventsMetricsConfigModel>();

  public create(data: Omit<EventsMetricsConfigModel, "id" | "version" | "createdAt" | "updatedAt">): EventsMetricsConfigModel {
    const id = "even_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: EventsMetricsConfigModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = EventsMetricsConfigValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for EventsMetricsConfig: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): EventsMetricsConfigModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: EventsMetricsConfigModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<EventsMetricsConfigModel>): EventsMetricsConfigModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: EventsMetricsConfigModel = {
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
