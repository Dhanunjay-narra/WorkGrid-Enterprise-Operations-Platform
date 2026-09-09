import { EventsPartitionsRecordModel, EventsPartitionsRecordValidator } from "@nexora/types/domains/events/partitions/EventsPartitionsRecord";

export class EventsPartitionsRecordService {
  private repository = new Map<string, EventsPartitionsRecordModel>();

  public create(data: Omit<EventsPartitionsRecordModel, "id" | "version" | "createdAt" | "updatedAt">): EventsPartitionsRecordModel {
    const id = "even_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: EventsPartitionsRecordModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = EventsPartitionsRecordValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for EventsPartitionsRecord: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): EventsPartitionsRecordModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: EventsPartitionsRecordModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<EventsPartitionsRecordModel>): EventsPartitionsRecordModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: EventsPartitionsRecordModel = {
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
