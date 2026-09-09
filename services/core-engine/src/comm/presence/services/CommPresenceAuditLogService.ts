import { CommPresenceAuditLogModel, CommPresenceAuditLogValidator } from "@nexora/types/domains/comm/presence/CommPresenceAuditLog";

export class CommPresenceAuditLogService {
  private repository = new Map<string, CommPresenceAuditLogModel>();

  public create(data: Omit<CommPresenceAuditLogModel, "id" | "version" | "createdAt" | "updatedAt">): CommPresenceAuditLogModel {
    const id = "comm_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: CommPresenceAuditLogModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = CommPresenceAuditLogValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for CommPresenceAuditLog: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): CommPresenceAuditLogModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: CommPresenceAuditLogModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<CommPresenceAuditLogModel>): CommPresenceAuditLogModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: CommPresenceAuditLogModel = {
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
