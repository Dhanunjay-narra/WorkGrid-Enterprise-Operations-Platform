import { EventsConsumersTransactionModel, EventsConsumersTransactionValidator } from "@nexora/types/domains/events/consumers/EventsConsumersTransaction";

export class EventsConsumersTransactionService {
  private repository = new Map<string, EventsConsumersTransactionModel>();

  public create(data: Omit<EventsConsumersTransactionModel, "id" | "version" | "createdAt" | "updatedAt">): EventsConsumersTransactionModel {
    const id = "even_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: EventsConsumersTransactionModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = EventsConsumersTransactionValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for EventsConsumersTransaction: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): EventsConsumersTransactionModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: EventsConsumersTransactionModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<EventsConsumersTransactionModel>): EventsConsumersTransactionModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: EventsConsumersTransactionModel = {
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
