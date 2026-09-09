import { EventsPartitionsTransactionModel, EventsPartitionsTransactionValidator } from "@nexora/types/domains/events/partitions/EventsPartitionsTransaction";

export class EventsPartitionsTransactionService {
  private repository = new Map<string, EventsPartitionsTransactionModel>();

  public create(data: Omit<EventsPartitionsTransactionModel, "id" | "version" | "createdAt" | "updatedAt">): EventsPartitionsTransactionModel {
    const id = "even_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: EventsPartitionsTransactionModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = EventsPartitionsTransactionValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for EventsPartitionsTransaction: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): EventsPartitionsTransactionModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: EventsPartitionsTransactionModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<EventsPartitionsTransactionModel>): EventsPartitionsTransactionModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: EventsPartitionsTransactionModel = {
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
