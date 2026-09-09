import { EventsConsumersAuditLogModel, EventsConsumersAuditLogValidator } from "@nexora/types/domains/events/consumers/EventsConsumersAuditLog";

export class EventsConsumersAuditLogService {
  private repository = new Map<string, EventsConsumersAuditLogModel>();

  public create(data: Omit<EventsConsumersAuditLogModel, "id" | "version" | "createdAt" | "updatedAt">): EventsConsumersAuditLogModel {
    const id = "even_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: EventsConsumersAuditLogModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = EventsConsumersAuditLogValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for EventsConsumersAuditLog: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): EventsConsumersAuditLogModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: EventsConsumersAuditLogModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<EventsConsumersAuditLogModel>): EventsConsumersAuditLogModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: EventsConsumersAuditLogModel = {
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
