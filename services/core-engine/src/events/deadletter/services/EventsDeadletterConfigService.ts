import { EventsDeadletterConfigModel, EventsDeadletterConfigValidator } from "@nexora/types/domains/events/deadletter/EventsDeadletterConfig";

export class EventsDeadletterConfigService {
  private repository = new Map<string, EventsDeadletterConfigModel>();

  public create(data: Omit<EventsDeadletterConfigModel, "id" | "version" | "createdAt" | "updatedAt">): EventsDeadletterConfigModel {
    const id = "even_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: EventsDeadletterConfigModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = EventsDeadletterConfigValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for EventsDeadletterConfig: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): EventsDeadletterConfigModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: EventsDeadletterConfigModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<EventsDeadletterConfigModel>): EventsDeadletterConfigModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: EventsDeadletterConfigModel = {
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
