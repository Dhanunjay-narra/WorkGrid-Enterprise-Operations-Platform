import { EventsDeadletterTransactionModel, EventsDeadletterTransactionValidator } from "@nexora/types/domains/events/deadletter/EventsDeadletterTransaction";

export class EventsDeadletterTransactionService {
  private repository = new Map<string, EventsDeadletterTransactionModel>();

  public create(data: Omit<EventsDeadletterTransactionModel, "id" | "version" | "createdAt" | "updatedAt">): EventsDeadletterTransactionModel {
    const id = "even_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: EventsDeadletterTransactionModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = EventsDeadletterTransactionValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for EventsDeadletterTransaction: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): EventsDeadletterTransactionModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: EventsDeadletterTransactionModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<EventsDeadletterTransactionModel>): EventsDeadletterTransactionModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: EventsDeadletterTransactionModel = {
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
