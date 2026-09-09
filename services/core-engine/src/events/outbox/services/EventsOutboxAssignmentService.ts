import { EventsOutboxAssignmentModel, EventsOutboxAssignmentValidator } from "@nexora/types/domains/events/outbox/EventsOutboxAssignment";

export class EventsOutboxAssignmentService {
  private repository = new Map<string, EventsOutboxAssignmentModel>();

  public create(data: Omit<EventsOutboxAssignmentModel, "id" | "version" | "createdAt" | "updatedAt">): EventsOutboxAssignmentModel {
    const id = "even_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: EventsOutboxAssignmentModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = EventsOutboxAssignmentValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for EventsOutboxAssignment: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): EventsOutboxAssignmentModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: EventsOutboxAssignmentModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<EventsOutboxAssignmentModel>): EventsOutboxAssignmentModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: EventsOutboxAssignmentModel = {
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
