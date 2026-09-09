import { EventsPartitionsStateModel, EventsPartitionsStateValidator } from "@nexora/types/domains/events/partitions/EventsPartitionsState";

export class EventsPartitionsStateService {
  private repository = new Map<string, EventsPartitionsStateModel>();

  public create(data: Omit<EventsPartitionsStateModel, "id" | "version" | "createdAt" | "updatedAt">): EventsPartitionsStateModel {
    const id = "even_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: EventsPartitionsStateModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = EventsPartitionsStateValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for EventsPartitionsState: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): EventsPartitionsStateModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: EventsPartitionsStateModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<EventsPartitionsStateModel>): EventsPartitionsStateModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: EventsPartitionsStateModel = {
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
