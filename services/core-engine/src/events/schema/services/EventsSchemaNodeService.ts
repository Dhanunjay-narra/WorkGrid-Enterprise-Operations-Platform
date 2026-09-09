import { EventsSchemaNodeModel, EventsSchemaNodeValidator } from "@nexora/types/domains/events/schema/EventsSchemaNode";

export class EventsSchemaNodeService {
  private repository = new Map<string, EventsSchemaNodeModel>();

  public create(data: Omit<EventsSchemaNodeModel, "id" | "version" | "createdAt" | "updatedAt">): EventsSchemaNodeModel {
    const id = "even_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: EventsSchemaNodeModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = EventsSchemaNodeValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for EventsSchemaNode: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): EventsSchemaNodeModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: EventsSchemaNodeModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<EventsSchemaNodeModel>): EventsSchemaNodeModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: EventsSchemaNodeModel = {
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
