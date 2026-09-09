import { EventsReplayConfigModel, EventsReplayConfigValidator } from "@nexora/types/domains/events/replay/EventsReplayConfig";

export class EventsReplayConfigService {
  private repository = new Map<string, EventsReplayConfigModel>();

  public create(data: Omit<EventsReplayConfigModel, "id" | "version" | "createdAt" | "updatedAt">): EventsReplayConfigModel {
    const id = "even_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: EventsReplayConfigModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = EventsReplayConfigValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for EventsReplayConfig: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): EventsReplayConfigModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: EventsReplayConfigModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<EventsReplayConfigModel>): EventsReplayConfigModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: EventsReplayConfigModel = {
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
