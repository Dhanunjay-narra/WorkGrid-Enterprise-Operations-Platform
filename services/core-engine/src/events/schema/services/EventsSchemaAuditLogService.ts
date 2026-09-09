import { EventsSchemaAuditLogModel, EventsSchemaAuditLogValidator } from "@nexora/types/domains/events/schema/EventsSchemaAuditLog";

export class EventsSchemaAuditLogService {
  private repository = new Map<string, EventsSchemaAuditLogModel>();

  public create(data: Omit<EventsSchemaAuditLogModel, "id" | "version" | "createdAt" | "updatedAt">): EventsSchemaAuditLogModel {
    const id = "even_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: EventsSchemaAuditLogModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = EventsSchemaAuditLogValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for EventsSchemaAuditLog: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): EventsSchemaAuditLogModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: EventsSchemaAuditLogModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<EventsSchemaAuditLogModel>): EventsSchemaAuditLogModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: EventsSchemaAuditLogModel = {
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
