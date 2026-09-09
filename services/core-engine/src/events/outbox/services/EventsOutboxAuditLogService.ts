import { EventsOutboxAuditLogModel, EventsOutboxAuditLogValidator } from "@nexora/types/domains/events/outbox/EventsOutboxAuditLog";

export class EventsOutboxAuditLogService {
  private repository = new Map<string, EventsOutboxAuditLogModel>();

  public create(data: Omit<EventsOutboxAuditLogModel, "id" | "version" | "createdAt" | "updatedAt">): EventsOutboxAuditLogModel {
    const id = "even_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: EventsOutboxAuditLogModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = EventsOutboxAuditLogValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for EventsOutboxAuditLog: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): EventsOutboxAuditLogModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: EventsOutboxAuditLogModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<EventsOutboxAuditLogModel>): EventsOutboxAuditLogModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: EventsOutboxAuditLogModel = {
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
