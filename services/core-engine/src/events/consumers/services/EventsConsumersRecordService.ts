import { EventsConsumersRecordModel, EventsConsumersRecordValidator } from "@nexora/types/domains/events/consumers/EventsConsumersRecord";

export class EventsConsumersRecordService {
  private repository = new Map<string, EventsConsumersRecordModel>();

  public create(data: Omit<EventsConsumersRecordModel, "id" | "version" | "createdAt" | "updatedAt">): EventsConsumersRecordModel {
    const id = "even_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: EventsConsumersRecordModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = EventsConsumersRecordValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for EventsConsumersRecord: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): EventsConsumersRecordModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: EventsConsumersRecordModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<EventsConsumersRecordModel>): EventsConsumersRecordModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: EventsConsumersRecordModel = {
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
