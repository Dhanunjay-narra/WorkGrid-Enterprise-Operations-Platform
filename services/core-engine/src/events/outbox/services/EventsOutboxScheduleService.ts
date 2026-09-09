import { EventsOutboxScheduleModel, EventsOutboxScheduleValidator } from "@nexora/types/domains/events/outbox/EventsOutboxSchedule";

export class EventsOutboxScheduleService {
  private repository = new Map<string, EventsOutboxScheduleModel>();

  public create(data: Omit<EventsOutboxScheduleModel, "id" | "version" | "createdAt" | "updatedAt">): EventsOutboxScheduleModel {
    const id = "even_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: EventsOutboxScheduleModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = EventsOutboxScheduleValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for EventsOutboxSchedule: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): EventsOutboxScheduleModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: EventsOutboxScheduleModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<EventsOutboxScheduleModel>): EventsOutboxScheduleModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: EventsOutboxScheduleModel = {
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
