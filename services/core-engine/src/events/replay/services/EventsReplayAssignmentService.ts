import { EventsReplayAssignmentModel, EventsReplayAssignmentValidator } from "@nexora/types/domains/events/replay/EventsReplayAssignment";

export class EventsReplayAssignmentService {
  private repository = new Map<string, EventsReplayAssignmentModel>();

  public create(data: Omit<EventsReplayAssignmentModel, "id" | "version" | "createdAt" | "updatedAt">): EventsReplayAssignmentModel {
    const id = "even_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: EventsReplayAssignmentModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = EventsReplayAssignmentValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for EventsReplayAssignment: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): EventsReplayAssignmentModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: EventsReplayAssignmentModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<EventsReplayAssignmentModel>): EventsReplayAssignmentModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: EventsReplayAssignmentModel = {
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
