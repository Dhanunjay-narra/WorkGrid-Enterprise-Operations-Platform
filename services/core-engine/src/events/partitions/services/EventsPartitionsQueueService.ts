import { EventsPartitionsQueueModel, EventsPartitionsQueueValidator } from "@nexora/types/domains/events/partitions/EventsPartitionsQueue";

export class EventsPartitionsQueueService {
  private repository = new Map<string, EventsPartitionsQueueModel>();

  public create(data: Omit<EventsPartitionsQueueModel, "id" | "version" | "createdAt" | "updatedAt">): EventsPartitionsQueueModel {
    const id = "even_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: EventsPartitionsQueueModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = EventsPartitionsQueueValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for EventsPartitionsQueue: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): EventsPartitionsQueueModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: EventsPartitionsQueueModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<EventsPartitionsQueueModel>): EventsPartitionsQueueModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: EventsPartitionsQueueModel = {
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
