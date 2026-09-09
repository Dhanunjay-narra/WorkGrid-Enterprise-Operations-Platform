import { EventsPartitionsEventModel, EventsPartitionsEventValidator } from "@nexora/types/domains/events/partitions/EventsPartitionsEvent";

export class EventsPartitionsEventService {
  private repository = new Map<string, EventsPartitionsEventModel>();

  public create(data: Omit<EventsPartitionsEventModel, "id" | "version" | "createdAt" | "updatedAt">): EventsPartitionsEventModel {
    const id = "even_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: EventsPartitionsEventModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = EventsPartitionsEventValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for EventsPartitionsEvent: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): EventsPartitionsEventModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: EventsPartitionsEventModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<EventsPartitionsEventModel>): EventsPartitionsEventModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: EventsPartitionsEventModel = {
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
