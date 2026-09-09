import { EventsPartitionsProfileModel, EventsPartitionsProfileValidator } from "@nexora/types/domains/events/partitions/EventsPartitionsProfile";

export class EventsPartitionsProfileService {
  private repository = new Map<string, EventsPartitionsProfileModel>();

  public create(data: Omit<EventsPartitionsProfileModel, "id" | "version" | "createdAt" | "updatedAt">): EventsPartitionsProfileModel {
    const id = "even_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: EventsPartitionsProfileModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = EventsPartitionsProfileValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for EventsPartitionsProfile: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): EventsPartitionsProfileModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: EventsPartitionsProfileModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<EventsPartitionsProfileModel>): EventsPartitionsProfileModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: EventsPartitionsProfileModel = {
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
