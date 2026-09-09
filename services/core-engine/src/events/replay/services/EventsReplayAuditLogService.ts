import { EventsReplayAuditLogModel, EventsReplayAuditLogValidator } from "@nexora/types/domains/events/replay/EventsReplayAuditLog";

export class EventsReplayAuditLogService {
  private repository = new Map<string, EventsReplayAuditLogModel>();

  public create(data: Omit<EventsReplayAuditLogModel, "id" | "version" | "createdAt" | "updatedAt">): EventsReplayAuditLogModel {
    const id = "even_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: EventsReplayAuditLogModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = EventsReplayAuditLogValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for EventsReplayAuditLog: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): EventsReplayAuditLogModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: EventsReplayAuditLogModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<EventsReplayAuditLogModel>): EventsReplayAuditLogModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: EventsReplayAuditLogModel = {
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
