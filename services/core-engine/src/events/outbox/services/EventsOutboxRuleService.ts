import { EventsOutboxRuleModel, EventsOutboxRuleValidator } from "@nexora/types/domains/events/outbox/EventsOutboxRule";

export class EventsOutboxRuleService {
  private repository = new Map<string, EventsOutboxRuleModel>();

  public create(data: Omit<EventsOutboxRuleModel, "id" | "version" | "createdAt" | "updatedAt">): EventsOutboxRuleModel {
    const id = "even_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: EventsOutboxRuleModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = EventsOutboxRuleValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for EventsOutboxRule: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): EventsOutboxRuleModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: EventsOutboxRuleModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<EventsOutboxRuleModel>): EventsOutboxRuleModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: EventsOutboxRuleModel = {
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
