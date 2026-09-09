import { EventsDeadletterProfileModel, EventsDeadletterProfileValidator } from "@nexora/types/domains/events/deadletter/EventsDeadletterProfile";

export class EventsDeadletterProfileService {
  private repository = new Map<string, EventsDeadletterProfileModel>();

  public create(data: Omit<EventsDeadletterProfileModel, "id" | "version" | "createdAt" | "updatedAt">): EventsDeadletterProfileModel {
    const id = "even_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: EventsDeadletterProfileModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = EventsDeadletterProfileValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for EventsDeadletterProfile: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): EventsDeadletterProfileModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: EventsDeadletterProfileModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<EventsDeadletterProfileModel>): EventsDeadletterProfileModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: EventsDeadletterProfileModel = {
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
