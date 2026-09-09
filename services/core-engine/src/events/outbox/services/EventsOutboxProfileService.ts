import { EventsOutboxProfileModel, EventsOutboxProfileValidator } from "@nexora/types/domains/events/outbox/EventsOutboxProfile";

export class EventsOutboxProfileService {
  private repository = new Map<string, EventsOutboxProfileModel>();

  public create(data: Omit<EventsOutboxProfileModel, "id" | "version" | "createdAt" | "updatedAt">): EventsOutboxProfileModel {
    const id = "even_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: EventsOutboxProfileModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = EventsOutboxProfileValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for EventsOutboxProfile: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): EventsOutboxProfileModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: EventsOutboxProfileModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<EventsOutboxProfileModel>): EventsOutboxProfileModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: EventsOutboxProfileModel = {
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
