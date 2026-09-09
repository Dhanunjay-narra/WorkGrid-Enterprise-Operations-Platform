import { EventsDeadletterRuleModel, EventsDeadletterRuleValidator } from "@nexora/types/domains/events/deadletter/EventsDeadletterRule";

export class EventsDeadletterRuleService {
  private repository = new Map<string, EventsDeadletterRuleModel>();

  public create(data: Omit<EventsDeadletterRuleModel, "id" | "version" | "createdAt" | "updatedAt">): EventsDeadletterRuleModel {
    const id = "even_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: EventsDeadletterRuleModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = EventsDeadletterRuleValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for EventsDeadletterRule: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): EventsDeadletterRuleModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: EventsDeadletterRuleModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<EventsDeadletterRuleModel>): EventsDeadletterRuleModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: EventsDeadletterRuleModel = {
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
