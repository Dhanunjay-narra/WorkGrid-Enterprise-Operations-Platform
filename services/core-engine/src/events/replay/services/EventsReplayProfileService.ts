import { EventsReplayProfileModel, EventsReplayProfileValidator } from "@nexora/types/domains/events/replay/EventsReplayProfile";

export class EventsReplayProfileService {
  private repository = new Map<string, EventsReplayProfileModel>();

  public create(data: Omit<EventsReplayProfileModel, "id" | "version" | "createdAt" | "updatedAt">): EventsReplayProfileModel {
    const id = "even_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: EventsReplayProfileModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = EventsReplayProfileValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for EventsReplayProfile: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): EventsReplayProfileModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: EventsReplayProfileModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<EventsReplayProfileModel>): EventsReplayProfileModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: EventsReplayProfileModel = {
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
