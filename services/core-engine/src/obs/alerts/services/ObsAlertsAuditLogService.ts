import { ObsAlertsAuditLogModel, ObsAlertsAuditLogValidator } from "@nexora/types/domains/obs/alerts/ObsAlertsAuditLog";

export class ObsAlertsAuditLogService {
  private repository = new Map<string, ObsAlertsAuditLogModel>();

  public create(data: Omit<ObsAlertsAuditLogModel, "id" | "version" | "createdAt" | "updatedAt">): ObsAlertsAuditLogModel {
    const id = "obs__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: ObsAlertsAuditLogModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = ObsAlertsAuditLogValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for ObsAlertsAuditLog: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): ObsAlertsAuditLogModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: ObsAlertsAuditLogModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<ObsAlertsAuditLogModel>): ObsAlertsAuditLogModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: ObsAlertsAuditLogModel = {
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
