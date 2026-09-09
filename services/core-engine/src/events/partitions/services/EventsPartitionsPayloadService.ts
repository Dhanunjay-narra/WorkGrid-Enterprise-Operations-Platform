import { EventsPartitionsPayloadModel, EventsPartitionsPayloadValidator } from "@nexora/types/domains/events/partitions/EventsPartitionsPayload";

export class EventsPartitionsPayloadService {
  private repository = new Map<string, EventsPartitionsPayloadModel>();

  public create(data: Omit<EventsPartitionsPayloadModel, "id" | "version" | "createdAt" | "updatedAt">): EventsPartitionsPayloadModel {
    const id = "even_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: EventsPartitionsPayloadModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = EventsPartitionsPayloadValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for EventsPartitionsPayload: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): EventsPartitionsPayloadModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: EventsPartitionsPayloadModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<EventsPartitionsPayloadModel>): EventsPartitionsPayloadModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: EventsPartitionsPayloadModel = {
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
