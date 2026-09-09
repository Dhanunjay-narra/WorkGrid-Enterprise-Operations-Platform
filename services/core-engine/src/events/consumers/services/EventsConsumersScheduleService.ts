import { EventsConsumersScheduleModel, EventsConsumersScheduleValidator } from "@nexora/types/domains/events/consumers/EventsConsumersSchedule";

export class EventsConsumersScheduleService {
  private repository = new Map<string, EventsConsumersScheduleModel>();

  public create(data: Omit<EventsConsumersScheduleModel, "id" | "version" | "createdAt" | "updatedAt">): EventsConsumersScheduleModel {
    const id = "even_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: EventsConsumersScheduleModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = EventsConsumersScheduleValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for EventsConsumersSchedule: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): EventsConsumersScheduleModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: EventsConsumersScheduleModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<EventsConsumersScheduleModel>): EventsConsumersScheduleModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: EventsConsumersScheduleModel = {
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
