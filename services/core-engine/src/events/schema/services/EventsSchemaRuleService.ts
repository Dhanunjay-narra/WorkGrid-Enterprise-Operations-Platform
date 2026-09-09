import { EventsSchemaRuleModel, EventsSchemaRuleValidator } from "@nexora/types/domains/events/schema/EventsSchemaRule";

export class EventsSchemaRuleService {
  private repository = new Map<string, EventsSchemaRuleModel>();

  public create(data: Omit<EventsSchemaRuleModel, "id" | "version" | "createdAt" | "updatedAt">): EventsSchemaRuleModel {
    const id = "even_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: EventsSchemaRuleModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = EventsSchemaRuleValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for EventsSchemaRule: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): EventsSchemaRuleModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: EventsSchemaRuleModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<EventsSchemaRuleModel>): EventsSchemaRuleModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: EventsSchemaRuleModel = {
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
