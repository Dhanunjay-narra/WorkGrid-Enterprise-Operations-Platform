import { EventsOutboxThresholdModel, EventsOutboxThresholdValidator } from "@nexora/types/domains/events/outbox/EventsOutboxThreshold";

export class EventsOutboxThresholdService {
  private repository = new Map<string, EventsOutboxThresholdModel>();

  public create(data: Omit<EventsOutboxThresholdModel, "id" | "version" | "createdAt" | "updatedAt">): EventsOutboxThresholdModel {
    const id = "even_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: EventsOutboxThresholdModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = EventsOutboxThresholdValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for EventsOutboxThreshold: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): EventsOutboxThresholdModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: EventsOutboxThresholdModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<EventsOutboxThresholdModel>): EventsOutboxThresholdModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: EventsOutboxThresholdModel = {
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
