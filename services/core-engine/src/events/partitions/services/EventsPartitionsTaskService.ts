import { EventsPartitionsTaskModel, EventsPartitionsTaskValidator } from "@nexora/types/domains/events/partitions/EventsPartitionsTask";

export class EventsPartitionsTaskService {
  private repository = new Map<string, EventsPartitionsTaskModel>();

  public create(data: Omit<EventsPartitionsTaskModel, "id" | "version" | "createdAt" | "updatedAt">): EventsPartitionsTaskModel {
    const id = "even_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: EventsPartitionsTaskModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = EventsPartitionsTaskValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for EventsPartitionsTask: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): EventsPartitionsTaskModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: EventsPartitionsTaskModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<EventsPartitionsTaskModel>): EventsPartitionsTaskModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: EventsPartitionsTaskModel = {
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
