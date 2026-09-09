import { EventsSchemaSessionModel, EventsSchemaSessionValidator } from "@nexora/types/domains/events/schema/EventsSchemaSession";

export class EventsSchemaSessionService {
  private repository = new Map<string, EventsSchemaSessionModel>();

  public create(data: Omit<EventsSchemaSessionModel, "id" | "version" | "createdAt" | "updatedAt">): EventsSchemaSessionModel {
    const id = "even_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: EventsSchemaSessionModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = EventsSchemaSessionValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for EventsSchemaSession: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): EventsSchemaSessionModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: EventsSchemaSessionModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<EventsSchemaSessionModel>): EventsSchemaSessionModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: EventsSchemaSessionModel = {
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
