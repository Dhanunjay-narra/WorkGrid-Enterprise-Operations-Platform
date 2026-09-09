import { BiForecastsReportModel, BiForecastsReportValidator } from "@nexora/types/domains/bi/forecasts/BiForecastsReport";

export class BiForecastsReportService {
  private repository = new Map<string, BiForecastsReportModel>();

  public create(data: Omit<BiForecastsReportModel, "id" | "version" | "createdAt" | "updatedAt">): BiForecastsReportModel {
    const id = "bi_f_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: BiForecastsReportModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = BiForecastsReportValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for BiForecastsReport: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): BiForecastsReportModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: BiForecastsReportModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<BiForecastsReportModel>): BiForecastsReportModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: BiForecastsReportModel = {
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
