import { EventsReplayPolicyModel, EventsReplayPolicyValidator } from "@nexora/types/domains/events/replay/EventsReplayPolicy";

export class EventsReplayPolicyService {
  private repository = new Map<string, EventsReplayPolicyModel>();

  public create(data: Omit<EventsReplayPolicyModel, "id" | "version" | "createdAt" | "updatedAt">): EventsReplayPolicyModel {
    const id = "even_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: EventsReplayPolicyModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = EventsReplayPolicyValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for EventsReplayPolicy: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): EventsReplayPolicyModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: EventsReplayPolicyModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<EventsReplayPolicyModel>): EventsReplayPolicyModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: EventsReplayPolicyModel = {
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
