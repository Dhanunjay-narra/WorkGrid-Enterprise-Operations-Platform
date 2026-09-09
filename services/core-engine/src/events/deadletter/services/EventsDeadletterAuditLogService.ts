import { EventsDeadletterAuditLogModel, EventsDeadletterAuditLogValidator } from "@nexora/types/domains/events/deadletter/EventsDeadletterAuditLog";

export class EventsDeadletterAuditLogService {
  private repository = new Map<string, EventsDeadletterAuditLogModel>();

  public create(data: Omit<EventsDeadletterAuditLogModel, "id" | "version" | "createdAt" | "updatedAt">): EventsDeadletterAuditLogModel {
    const id = "even_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: EventsDeadletterAuditLogModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = EventsDeadletterAuditLogValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for EventsDeadletterAuditLog: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): EventsDeadletterAuditLogModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: EventsDeadletterAuditLogModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<EventsDeadletterAuditLogModel>): EventsDeadletterAuditLogModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: EventsDeadletterAuditLogModel = {
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
