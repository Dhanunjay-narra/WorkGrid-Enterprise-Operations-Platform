import { EventsPartitionsSummaryModel, EventsPartitionsSummaryValidator } from "@nexora/types/domains/events/partitions/EventsPartitionsSummary";

export class EventsPartitionsSummaryService {
  private repository = new Map<string, EventsPartitionsSummaryModel>();

  public create(data: Omit<EventsPartitionsSummaryModel, "id" | "version" | "createdAt" | "updatedAt">): EventsPartitionsSummaryModel {
    const id = "even_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: EventsPartitionsSummaryModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = EventsPartitionsSummaryValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for EventsPartitionsSummary: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): EventsPartitionsSummaryModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: EventsPartitionsSummaryModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<EventsPartitionsSummaryModel>): EventsPartitionsSummaryModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: EventsPartitionsSummaryModel = {
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
