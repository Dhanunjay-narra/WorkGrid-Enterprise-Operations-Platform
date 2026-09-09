import { EventsDeadletterRecordModel, EventsDeadletterRecordValidator } from "@nexora/types/domains/events/deadletter/EventsDeadletterRecord";

export class EventsDeadletterRecordService {
  private repository = new Map<string, EventsDeadletterRecordModel>();

  public create(data: Omit<EventsDeadletterRecordModel, "id" | "version" | "createdAt" | "updatedAt">): EventsDeadletterRecordModel {
    const id = "even_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: EventsDeadletterRecordModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = EventsDeadletterRecordValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for EventsDeadletterRecord: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): EventsDeadletterRecordModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: EventsDeadletterRecordModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<EventsDeadletterRecordModel>): EventsDeadletterRecordModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: EventsDeadletterRecordModel = {
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
