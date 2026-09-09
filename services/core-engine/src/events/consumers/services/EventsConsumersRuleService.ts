import { EventsConsumersRuleModel, EventsConsumersRuleValidator } from "@nexora/types/domains/events/consumers/EventsConsumersRule";

export class EventsConsumersRuleService {
  private repository = new Map<string, EventsConsumersRuleModel>();

  public create(data: Omit<EventsConsumersRuleModel, "id" | "version" | "createdAt" | "updatedAt">): EventsConsumersRuleModel {
    const id = "even_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: EventsConsumersRuleModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = EventsConsumersRuleValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for EventsConsumersRule: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): EventsConsumersRuleModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: EventsConsumersRuleModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<EventsConsumersRuleModel>): EventsConsumersRuleModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: EventsConsumersRuleModel = {
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
