import { EventsMetricsProfileModel, EventsMetricsProfileValidator } from "@nexora/types/domains/events/metrics/EventsMetricsProfile";

export class EventsMetricsProfileService {
  private repository = new Map<string, EventsMetricsProfileModel>();

  public create(data: Omit<EventsMetricsProfileModel, "id" | "version" | "createdAt" | "updatedAt">): EventsMetricsProfileModel {
    const id = "even_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: EventsMetricsProfileModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = EventsMetricsProfileValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for EventsMetricsProfile: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): EventsMetricsProfileModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: EventsMetricsProfileModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<EventsMetricsProfileModel>): EventsMetricsProfileModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: EventsMetricsProfileModel = {
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
