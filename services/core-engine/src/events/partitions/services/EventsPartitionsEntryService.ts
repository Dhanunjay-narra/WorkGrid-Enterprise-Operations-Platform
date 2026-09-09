import { EventsPartitionsEntryModel, EventsPartitionsEntryValidator } from "@nexora/types/domains/events/partitions/EventsPartitionsEntry";

export class EventsPartitionsEntryService {
  private repository = new Map<string, EventsPartitionsEntryModel>();

  public create(data: Omit<EventsPartitionsEntryModel, "id" | "version" | "createdAt" | "updatedAt">): EventsPartitionsEntryModel {
    const id = "even_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: EventsPartitionsEntryModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = EventsPartitionsEntryValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for EventsPartitionsEntry: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): EventsPartitionsEntryModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: EventsPartitionsEntryModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<EventsPartitionsEntryModel>): EventsPartitionsEntryModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: EventsPartitionsEntryModel = {
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
