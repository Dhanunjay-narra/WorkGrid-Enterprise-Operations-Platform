import { FinanceForecastReportModel, FinanceForecastReportValidator } from "@nexora/types/domains/finance/forecast/FinanceForecastReport";

export class FinanceForecastReportService {
  private repository = new Map<string, FinanceForecastReportModel>();

  public create(data: Omit<FinanceForecastReportModel, "id" | "version" | "createdAt" | "updatedAt">): FinanceForecastReportModel {
    const id = "fina_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: FinanceForecastReportModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = FinanceForecastReportValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for FinanceForecastReport: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): FinanceForecastReportModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: FinanceForecastReportModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<FinanceForecastReportModel>): FinanceForecastReportModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: FinanceForecastReportModel = {
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
