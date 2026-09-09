import { EventsDeadletterMappingModel, EventsDeadletterMappingValidator } from "@nexora/types/domains/events/deadletter/EventsDeadletterMapping";

export class EventsDeadletterMappingService {
  private repository = new Map<string, EventsDeadletterMappingModel>();

  public create(data: Omit<EventsDeadletterMappingModel, "id" | "version" | "createdAt" | "updatedAt">): EventsDeadletterMappingModel {
    const id = "even_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: EventsDeadletterMappingModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = EventsDeadletterMappingValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for EventsDeadletterMapping: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): EventsDeadletterMappingModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: EventsDeadletterMappingModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<EventsDeadletterMappingModel>): EventsDeadletterMappingModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: EventsDeadletterMappingModel = {
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
