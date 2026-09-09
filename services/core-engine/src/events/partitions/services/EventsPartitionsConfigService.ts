import { EventsPartitionsConfigModel, EventsPartitionsConfigValidator } from "@nexora/types/domains/events/partitions/EventsPartitionsConfig";

export class EventsPartitionsConfigService {
  private repository = new Map<string, EventsPartitionsConfigModel>();

  public create(data: Omit<EventsPartitionsConfigModel, "id" | "version" | "createdAt" | "updatedAt">): EventsPartitionsConfigModel {
    const id = "even_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: EventsPartitionsConfigModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = EventsPartitionsConfigValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for EventsPartitionsConfig: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): EventsPartitionsConfigModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: EventsPartitionsConfigModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<EventsPartitionsConfigModel>): EventsPartitionsConfigModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: EventsPartitionsConfigModel = {
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
