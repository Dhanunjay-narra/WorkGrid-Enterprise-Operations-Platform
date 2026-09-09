import { EventsConsumersAssignmentModel, EventsConsumersAssignmentValidator } from "@nexora/types/domains/events/consumers/EventsConsumersAssignment";

export class EventsConsumersAssignmentService {
  private repository = new Map<string, EventsConsumersAssignmentModel>();

  public create(data: Omit<EventsConsumersAssignmentModel, "id" | "version" | "createdAt" | "updatedAt">): EventsConsumersAssignmentModel {
    const id = "even_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: EventsConsumersAssignmentModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = EventsConsumersAssignmentValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for EventsConsumersAssignment: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): EventsConsumersAssignmentModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: EventsConsumersAssignmentModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<EventsConsumersAssignmentModel>): EventsConsumersAssignmentModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: EventsConsumersAssignmentModel = {
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
