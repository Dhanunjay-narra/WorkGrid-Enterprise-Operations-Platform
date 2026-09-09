import { EventsIdempotencyScheduleModel, EventsIdempotencyScheduleValidator } from "@nexora/types/domains/events/idempotency/EventsIdempotencySchedule";

export class EventsIdempotencyScheduleService {
  private repository = new Map<string, EventsIdempotencyScheduleModel>();

  public create(data: Omit<EventsIdempotencyScheduleModel, "id" | "version" | "createdAt" | "updatedAt">): EventsIdempotencyScheduleModel {
    const id = "even_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: EventsIdempotencyScheduleModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = EventsIdempotencyScheduleValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for EventsIdempotencySchedule: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): EventsIdempotencyScheduleModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: EventsIdempotencyScheduleModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<EventsIdempotencyScheduleModel>): EventsIdempotencyScheduleModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: EventsIdempotencyScheduleModel = {
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
