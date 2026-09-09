import { EventsConsumersThresholdModel, EventsConsumersThresholdValidator } from "@nexora/types/domains/events/consumers/EventsConsumersThreshold";

export class EventsConsumersThresholdService {
  private repository = new Map<string, EventsConsumersThresholdModel>();

  public create(data: Omit<EventsConsumersThresholdModel, "id" | "version" | "createdAt" | "updatedAt">): EventsConsumersThresholdModel {
    const id = "even_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: EventsConsumersThresholdModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = EventsConsumersThresholdValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for EventsConsumersThreshold: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): EventsConsumersThresholdModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: EventsConsumersThresholdModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<EventsConsumersThresholdModel>): EventsConsumersThresholdModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: EventsConsumersThresholdModel = {
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
