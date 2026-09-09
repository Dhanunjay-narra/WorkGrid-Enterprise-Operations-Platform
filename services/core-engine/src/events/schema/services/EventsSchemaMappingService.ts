import { EventsSchemaMappingModel, EventsSchemaMappingValidator } from "@nexora/types/domains/events/schema/EventsSchemaMapping";

export class EventsSchemaMappingService {
  private repository = new Map<string, EventsSchemaMappingModel>();

  public create(data: Omit<EventsSchemaMappingModel, "id" | "version" | "createdAt" | "updatedAt">): EventsSchemaMappingModel {
    const id = "even_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: EventsSchemaMappingModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = EventsSchemaMappingValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for EventsSchemaMapping: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): EventsSchemaMappingModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: EventsSchemaMappingModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<EventsSchemaMappingModel>): EventsSchemaMappingModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: EventsSchemaMappingModel = {
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
