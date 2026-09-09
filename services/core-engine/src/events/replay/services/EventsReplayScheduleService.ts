import { EventsReplayScheduleModel, EventsReplayScheduleValidator } from "@nexora/types/domains/events/replay/EventsReplaySchedule";

export class EventsReplayScheduleService {
  private repository = new Map<string, EventsReplayScheduleModel>();

  public create(data: Omit<EventsReplayScheduleModel, "id" | "version" | "createdAt" | "updatedAt">): EventsReplayScheduleModel {
    const id = "even_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: EventsReplayScheduleModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = EventsReplayScheduleValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for EventsReplaySchedule: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): EventsReplayScheduleModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: EventsReplayScheduleModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<EventsReplayScheduleModel>): EventsReplayScheduleModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: EventsReplayScheduleModel = {
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
