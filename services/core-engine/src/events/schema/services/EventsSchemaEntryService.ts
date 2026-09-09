import { EventsSchemaEntryModel, EventsSchemaEntryValidator } from "@nexora/types/domains/events/schema/EventsSchemaEntry";

export class EventsSchemaEntryService {
  private repository = new Map<string, EventsSchemaEntryModel>();

  public create(data: Omit<EventsSchemaEntryModel, "id" | "version" | "createdAt" | "updatedAt">): EventsSchemaEntryModel {
    const id = "even_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: EventsSchemaEntryModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = EventsSchemaEntryValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for EventsSchemaEntry: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): EventsSchemaEntryModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: EventsSchemaEntryModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<EventsSchemaEntryModel>): EventsSchemaEntryModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: EventsSchemaEntryModel = {
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
