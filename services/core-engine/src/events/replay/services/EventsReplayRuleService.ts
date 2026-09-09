import { EventsReplayRuleModel, EventsReplayRuleValidator } from "@nexora/types/domains/events/replay/EventsReplayRule";

export class EventsReplayRuleService {
  private repository = new Map<string, EventsReplayRuleModel>();

  public create(data: Omit<EventsReplayRuleModel, "id" | "version" | "createdAt" | "updatedAt">): EventsReplayRuleModel {
    const id = "even_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: EventsReplayRuleModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = EventsReplayRuleValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for EventsReplayRule: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): EventsReplayRuleModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: EventsReplayRuleModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<EventsReplayRuleModel>): EventsReplayRuleModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: EventsReplayRuleModel = {
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
