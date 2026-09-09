import { EventsSchemaScheduleModel, EventsSchemaScheduleValidator } from "@nexora/types/domains/events/schema/EventsSchemaSchedule";

export class EventsSchemaScheduleService {
  private repository = new Map<string, EventsSchemaScheduleModel>();

  public create(data: Omit<EventsSchemaScheduleModel, "id" | "version" | "createdAt" | "updatedAt">): EventsSchemaScheduleModel {
    const id = "even_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: EventsSchemaScheduleModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = EventsSchemaScheduleValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for EventsSchemaSchedule: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): EventsSchemaScheduleModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: EventsSchemaScheduleModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<EventsSchemaScheduleModel>): EventsSchemaScheduleModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: EventsSchemaScheduleModel = {
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
