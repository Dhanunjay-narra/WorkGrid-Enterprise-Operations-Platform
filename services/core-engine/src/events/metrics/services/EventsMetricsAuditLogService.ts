import { EventsMetricsAuditLogModel, EventsMetricsAuditLogValidator } from "@nexora/types/domains/events/metrics/EventsMetricsAuditLog";

export class EventsMetricsAuditLogService {
  private repository = new Map<string, EventsMetricsAuditLogModel>();

  public create(data: Omit<EventsMetricsAuditLogModel, "id" | "version" | "createdAt" | "updatedAt">): EventsMetricsAuditLogModel {
    const id = "even_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: EventsMetricsAuditLogModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = EventsMetricsAuditLogValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for EventsMetricsAuditLog: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): EventsMetricsAuditLogModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: EventsMetricsAuditLogModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<EventsMetricsAuditLogModel>): EventsMetricsAuditLogModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: EventsMetricsAuditLogModel = {
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
