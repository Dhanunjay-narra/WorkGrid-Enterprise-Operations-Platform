import { EventsReplayTransactionModel, EventsReplayTransactionValidator } from "@nexora/types/domains/events/replay/EventsReplayTransaction";

export class EventsReplayTransactionService {
  private repository = new Map<string, EventsReplayTransactionModel>();

  public create(data: Omit<EventsReplayTransactionModel, "id" | "version" | "createdAt" | "updatedAt">): EventsReplayTransactionModel {
    const id = "even_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: EventsReplayTransactionModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = EventsReplayTransactionValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for EventsReplayTransaction: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): EventsReplayTransactionModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: EventsReplayTransactionModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<EventsReplayTransactionModel>): EventsReplayTransactionModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: EventsReplayTransactionModel = {
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
