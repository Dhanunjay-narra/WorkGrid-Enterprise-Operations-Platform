import { EventsDeadletterAssignmentModel, EventsDeadletterAssignmentValidator } from "@nexora/types/domains/events/deadletter/EventsDeadletterAssignment";

export class EventsDeadletterAssignmentService {
  private repository = new Map<string, EventsDeadletterAssignmentModel>();

  public create(data: Omit<EventsDeadletterAssignmentModel, "id" | "version" | "createdAt" | "updatedAt">): EventsDeadletterAssignmentModel {
    const id = "even_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: EventsDeadletterAssignmentModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = EventsDeadletterAssignmentValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for EventsDeadletterAssignment: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): EventsDeadletterAssignmentModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: EventsDeadletterAssignmentModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<EventsDeadletterAssignmentModel>): EventsDeadletterAssignmentModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: EventsDeadletterAssignmentModel = {
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
