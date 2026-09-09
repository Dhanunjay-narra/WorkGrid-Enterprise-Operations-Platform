import { ObsDashboardsAuditLogModel, ObsDashboardsAuditLogValidator } from "@nexora/types/domains/obs/dashboards/ObsDashboardsAuditLog";

export class ObsDashboardsAuditLogService {
  private repository = new Map<string, ObsDashboardsAuditLogModel>();

  public create(data: Omit<ObsDashboardsAuditLogModel, "id" | "version" | "createdAt" | "updatedAt">): ObsDashboardsAuditLogModel {
    const id = "obs__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: ObsDashboardsAuditLogModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = ObsDashboardsAuditLogValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for ObsDashboardsAuditLog: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): ObsDashboardsAuditLogModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: ObsDashboardsAuditLogModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<ObsDashboardsAuditLogModel>): ObsDashboardsAuditLogModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: ObsDashboardsAuditLogModel = {
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
