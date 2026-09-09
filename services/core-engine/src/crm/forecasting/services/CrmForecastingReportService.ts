import { CrmForecastingReportModel, CrmForecastingReportValidator } from "@nexora/types/domains/crm/forecasting/CrmForecastingReport";

export class CrmForecastingReportService {
  private repository = new Map<string, CrmForecastingReportModel>();

  public create(data: Omit<CrmForecastingReportModel, "id" | "version" | "createdAt" | "updatedAt">): CrmForecastingReportModel {
    const id = "crm__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: CrmForecastingReportModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = CrmForecastingReportValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for CrmForecastingReport: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): CrmForecastingReportModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: CrmForecastingReportModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<CrmForecastingReportModel>): CrmForecastingReportModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: CrmForecastingReportModel = {
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
