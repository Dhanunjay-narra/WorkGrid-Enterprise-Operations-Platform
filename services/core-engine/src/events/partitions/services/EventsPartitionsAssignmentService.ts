import { EventsPartitionsAssignmentModel, EventsPartitionsAssignmentValidator } from "@nexora/types/domains/events/partitions/EventsPartitionsAssignment";

export class EventsPartitionsAssignmentService {
  private repository = new Map<string, EventsPartitionsAssignmentModel>();

  public create(data: Omit<EventsPartitionsAssignmentModel, "id" | "version" | "createdAt" | "updatedAt">): EventsPartitionsAssignmentModel {
    const id = "even_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: EventsPartitionsAssignmentModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = EventsPartitionsAssignmentValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for EventsPartitionsAssignment: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): EventsPartitionsAssignmentModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: EventsPartitionsAssignmentModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<EventsPartitionsAssignmentModel>): EventsPartitionsAssignmentModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: EventsPartitionsAssignmentModel = {
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
