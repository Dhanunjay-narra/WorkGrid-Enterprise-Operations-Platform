import { EventsOutboxMappingModel, EventsOutboxMappingValidator } from "@nexora/types/domains/events/outbox/EventsOutboxMapping";

export class EventsOutboxMappingService {
  private repository = new Map<string, EventsOutboxMappingModel>();

  public create(data: Omit<EventsOutboxMappingModel, "id" | "version" | "createdAt" | "updatedAt">): EventsOutboxMappingModel {
    const id = "even_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: EventsOutboxMappingModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = EventsOutboxMappingValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for EventsOutboxMapping: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): EventsOutboxMappingModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: EventsOutboxMappingModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<EventsOutboxMappingModel>): EventsOutboxMappingModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: EventsOutboxMappingModel = {
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
