import { EventsDeadletterSnapshotModel, EventsDeadletterSnapshotValidator } from "@nexora/types/domains/events/deadletter/EventsDeadletterSnapshot";

export class EventsDeadletterSnapshotService {
  private repository = new Map<string, EventsDeadletterSnapshotModel>();

  public create(data: Omit<EventsDeadletterSnapshotModel, "id" | "version" | "createdAt" | "updatedAt">): EventsDeadletterSnapshotModel {
    const id = "even_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: EventsDeadletterSnapshotModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = EventsDeadletterSnapshotValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for EventsDeadletterSnapshot: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): EventsDeadletterSnapshotModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: EventsDeadletterSnapshotModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<EventsDeadletterSnapshotModel>): EventsDeadletterSnapshotModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: EventsDeadletterSnapshotModel = {
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
