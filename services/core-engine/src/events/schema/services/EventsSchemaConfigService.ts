import { EventsSchemaConfigModel, EventsSchemaConfigValidator } from "@nexora/types/domains/events/schema/EventsSchemaConfig";

export class EventsSchemaConfigService {
  private repository = new Map<string, EventsSchemaConfigModel>();

  public create(data: Omit<EventsSchemaConfigModel, "id" | "version" | "createdAt" | "updatedAt">): EventsSchemaConfigModel {
    const id = "even_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: EventsSchemaConfigModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = EventsSchemaConfigValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for EventsSchemaConfig: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): EventsSchemaConfigModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: EventsSchemaConfigModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<EventsSchemaConfigModel>): EventsSchemaConfigModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: EventsSchemaConfigModel = {
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
