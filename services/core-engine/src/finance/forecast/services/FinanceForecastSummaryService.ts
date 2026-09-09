import { FinanceForecastSummaryModel, FinanceForecastSummaryValidator } from "@nexora/types/domains/finance/forecast/FinanceForecastSummary";

export class FinanceForecastSummaryService {
  private repository = new Map<string, FinanceForecastSummaryModel>();

  public create(data: Omit<FinanceForecastSummaryModel, "id" | "version" | "createdAt" | "updatedAt">): FinanceForecastSummaryModel {
    const id = "fina_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: FinanceForecastSummaryModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = FinanceForecastSummaryValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for FinanceForecastSummary: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): FinanceForecastSummaryModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: FinanceForecastSummaryModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<FinanceForecastSummaryModel>): FinanceForecastSummaryModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: FinanceForecastSummaryModel = {
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
