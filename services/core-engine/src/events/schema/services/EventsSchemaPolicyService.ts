import { EventsSchemaPolicyModel, EventsSchemaPolicyValidator } from "@nexora/types/domains/events/schema/EventsSchemaPolicy";

export class EventsSchemaPolicyService {
  private repository = new Map<string, EventsSchemaPolicyModel>();

  public create(data: Omit<EventsSchemaPolicyModel, "id" | "version" | "createdAt" | "updatedAt">): EventsSchemaPolicyModel {
    const id = "even_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: EventsSchemaPolicyModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = EventsSchemaPolicyValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for EventsSchemaPolicy: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): EventsSchemaPolicyModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: EventsSchemaPolicyModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<EventsSchemaPolicyModel>): EventsSchemaPolicyModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: EventsSchemaPolicyModel = {
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
