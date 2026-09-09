import { EventsConsumersProfileModel, EventsConsumersProfileValidator } from "@nexora/types/domains/events/consumers/EventsConsumersProfile";

export class EventsConsumersProfileService {
  private repository = new Map<string, EventsConsumersProfileModel>();

  public create(data: Omit<EventsConsumersProfileModel, "id" | "version" | "createdAt" | "updatedAt">): EventsConsumersProfileModel {
    const id = "even_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: EventsConsumersProfileModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = EventsConsumersProfileValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for EventsConsumersProfile: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): EventsConsumersProfileModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: EventsConsumersProfileModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<EventsConsumersProfileModel>): EventsConsumersProfileModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: EventsConsumersProfileModel = {
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
