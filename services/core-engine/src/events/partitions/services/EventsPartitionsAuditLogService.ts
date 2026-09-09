import { EventsPartitionsAuditLogModel, EventsPartitionsAuditLogValidator } from "@nexora/types/domains/events/partitions/EventsPartitionsAuditLog";

export class EventsPartitionsAuditLogService {
  private repository = new Map<string, EventsPartitionsAuditLogModel>();

  public create(data: Omit<EventsPartitionsAuditLogModel, "id" | "version" | "createdAt" | "updatedAt">): EventsPartitionsAuditLogModel {
    const id = "even_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: EventsPartitionsAuditLogModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = EventsPartitionsAuditLogValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for EventsPartitionsAuditLog: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): EventsPartitionsAuditLogModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: EventsPartitionsAuditLogModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<EventsPartitionsAuditLogModel>): EventsPartitionsAuditLogModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: EventsPartitionsAuditLogModel = {
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
