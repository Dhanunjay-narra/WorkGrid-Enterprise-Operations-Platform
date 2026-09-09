import { EventsOutboxPayloadModel, EventsOutboxPayloadValidator } from "@nexora/types/domains/events/outbox/EventsOutboxPayload";

export class EventsOutboxPayloadService {
  private repository = new Map<string, EventsOutboxPayloadModel>();

  public create(data: Omit<EventsOutboxPayloadModel, "id" | "version" | "createdAt" | "updatedAt">): EventsOutboxPayloadModel {
    const id = "even_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: EventsOutboxPayloadModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = EventsOutboxPayloadValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for EventsOutboxPayload: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): EventsOutboxPayloadModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: EventsOutboxPayloadModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<EventsOutboxPayloadModel>): EventsOutboxPayloadModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: EventsOutboxPayloadModel = {
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
