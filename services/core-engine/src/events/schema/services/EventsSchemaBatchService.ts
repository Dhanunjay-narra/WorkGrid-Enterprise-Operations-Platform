import { EventsSchemaBatchModel, EventsSchemaBatchValidator } from "@nexora/types/domains/events/schema/EventsSchemaBatch";

export class EventsSchemaBatchService {
  private repository = new Map<string, EventsSchemaBatchModel>();

  public create(data: Omit<EventsSchemaBatchModel, "id" | "version" | "createdAt" | "updatedAt">): EventsSchemaBatchModel {
    const id = "even_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: EventsSchemaBatchModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = EventsSchemaBatchValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for EventsSchemaBatch: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): EventsSchemaBatchModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: EventsSchemaBatchModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<EventsSchemaBatchModel>): EventsSchemaBatchModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: EventsSchemaBatchModel = {
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
