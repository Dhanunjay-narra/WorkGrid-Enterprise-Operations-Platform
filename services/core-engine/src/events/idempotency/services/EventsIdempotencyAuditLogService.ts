import { EventsIdempotencyAuditLogModel, EventsIdempotencyAuditLogValidator } from "@nexora/types/domains/events/idempotency/EventsIdempotencyAuditLog";

export class EventsIdempotencyAuditLogService {
  private repository = new Map<string, EventsIdempotencyAuditLogModel>();

  public create(data: Omit<EventsIdempotencyAuditLogModel, "id" | "version" | "createdAt" | "updatedAt">): EventsIdempotencyAuditLogModel {
    const id = "even_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: EventsIdempotencyAuditLogModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = EventsIdempotencyAuditLogValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for EventsIdempotencyAuditLog: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): EventsIdempotencyAuditLogModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: EventsIdempotencyAuditLogModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<EventsIdempotencyAuditLogModel>): EventsIdempotencyAuditLogModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: EventsIdempotencyAuditLogModel = {
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
