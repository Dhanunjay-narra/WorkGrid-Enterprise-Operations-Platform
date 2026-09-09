import { EventsMetricsRuleModel, EventsMetricsRuleValidator } from "@nexora/types/domains/events/metrics/EventsMetricsRule";

export class EventsMetricsRuleService {
  private repository = new Map<string, EventsMetricsRuleModel>();

  public create(data: Omit<EventsMetricsRuleModel, "id" | "version" | "createdAt" | "updatedAt">): EventsMetricsRuleModel {
    const id = "even_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: EventsMetricsRuleModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = EventsMetricsRuleValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for EventsMetricsRule: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): EventsMetricsRuleModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: EventsMetricsRuleModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<EventsMetricsRuleModel>): EventsMetricsRuleModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: EventsMetricsRuleModel = {
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
