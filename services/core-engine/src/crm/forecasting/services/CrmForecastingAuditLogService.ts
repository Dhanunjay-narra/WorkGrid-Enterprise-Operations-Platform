import { CrmForecastingAuditLogModel, CrmForecastingAuditLogValidator } from "@nexora/types/domains/crm/forecasting/CrmForecastingAuditLog";

export class CrmForecastingAuditLogService {
  private repository = new Map<string, CrmForecastingAuditLogModel>();

  public create(data: Omit<CrmForecastingAuditLogModel, "id" | "version" | "createdAt" | "updatedAt">): CrmForecastingAuditLogModel {
    const id = "crm__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: CrmForecastingAuditLogModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = CrmForecastingAuditLogValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for CrmForecastingAuditLog: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): CrmForecastingAuditLogModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: CrmForecastingAuditLogModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<CrmForecastingAuditLogModel>): CrmForecastingAuditLogModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: CrmForecastingAuditLogModel = {
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
