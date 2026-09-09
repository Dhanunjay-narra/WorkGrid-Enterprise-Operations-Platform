import { EventsOutboxBatchModel, EventsOutboxBatchValidator } from "@nexora/types/domains/events/outbox/EventsOutboxBatch";

export class EventsOutboxBatchService {
  private repository = new Map<string, EventsOutboxBatchModel>();

  public create(data: Omit<EventsOutboxBatchModel, "id" | "version" | "createdAt" | "updatedAt">): EventsOutboxBatchModel {
    const id = "even_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: EventsOutboxBatchModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = EventsOutboxBatchValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for EventsOutboxBatch: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): EventsOutboxBatchModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: EventsOutboxBatchModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<EventsOutboxBatchModel>): EventsOutboxBatchModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: EventsOutboxBatchModel = {
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
