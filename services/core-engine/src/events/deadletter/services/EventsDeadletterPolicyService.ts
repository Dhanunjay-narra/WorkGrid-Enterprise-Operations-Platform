import { EventsDeadletterPolicyModel, EventsDeadletterPolicyValidator } from "@nexora/types/domains/events/deadletter/EventsDeadletterPolicy";

export class EventsDeadletterPolicyService {
  private repository = new Map<string, EventsDeadletterPolicyModel>();

  public create(data: Omit<EventsDeadletterPolicyModel, "id" | "version" | "createdAt" | "updatedAt">): EventsDeadletterPolicyModel {
    const id = "even_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: EventsDeadletterPolicyModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = EventsDeadletterPolicyValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for EventsDeadletterPolicy: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): EventsDeadletterPolicyModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: EventsDeadletterPolicyModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<EventsDeadletterPolicyModel>): EventsDeadletterPolicyModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: EventsDeadletterPolicyModel = {
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
