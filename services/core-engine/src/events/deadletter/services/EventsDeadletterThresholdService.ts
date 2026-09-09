import { EventsDeadletterThresholdModel, EventsDeadletterThresholdValidator } from "@nexora/types/domains/events/deadletter/EventsDeadletterThreshold";

export class EventsDeadletterThresholdService {
  private repository = new Map<string, EventsDeadletterThresholdModel>();

  public create(data: Omit<EventsDeadletterThresholdModel, "id" | "version" | "createdAt" | "updatedAt">): EventsDeadletterThresholdModel {
    const id = "even_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: EventsDeadletterThresholdModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = EventsDeadletterThresholdValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for EventsDeadletterThreshold: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): EventsDeadletterThresholdModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: EventsDeadletterThresholdModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<EventsDeadletterThresholdModel>): EventsDeadletterThresholdModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: EventsDeadletterThresholdModel = {
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
