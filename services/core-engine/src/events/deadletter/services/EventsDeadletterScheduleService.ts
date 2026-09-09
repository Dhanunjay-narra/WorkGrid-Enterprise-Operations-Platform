import { EventsDeadletterScheduleModel, EventsDeadletterScheduleValidator } from "@nexora/types/domains/events/deadletter/EventsDeadletterSchedule";

export class EventsDeadletterScheduleService {
  private repository = new Map<string, EventsDeadletterScheduleModel>();

  public create(data: Omit<EventsDeadletterScheduleModel, "id" | "version" | "createdAt" | "updatedAt">): EventsDeadletterScheduleModel {
    const id = "even_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: EventsDeadletterScheduleModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = EventsDeadletterScheduleValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for EventsDeadletterSchedule: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): EventsDeadletterScheduleModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: EventsDeadletterScheduleModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<EventsDeadletterScheduleModel>): EventsDeadletterScheduleModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: EventsDeadletterScheduleModel = {
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
