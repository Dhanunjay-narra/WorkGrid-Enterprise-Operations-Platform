import { FinFinancialForecastData, FinFinancialForecastValidator } from "../../../../packages/types/src/domains/finance/FinFinancialForecast";

export class FinFinancialForecastService {
  private repository = new Map<string, FinFinancialForecastData>();

  public create(data: Omit<FinFinancialForecastData, "id" | "createdAt" | "updatedAt">): FinFinancialForecastData {
    const id = "fin_" + Math.random().toString(36).substring(2, 9);
    const now = new Date().toISOString();
    const item: FinFinancialForecastData = {
      ...data,
      id,
      createdAt: now,
      updatedAt: now
    };
    const validation = FinFinancialForecastValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for FinFinancialForecast: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): FinFinancialForecastData | undefined {
    return this.repository.get(id);
  }

  public listByTenant(tenantId: string): FinFinancialForecastData[] {
    return Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
  }

  public update(id: string, updates: Partial<FinFinancialForecastData>): FinFinancialForecastData | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: FinFinancialForecastData = { ...existing, ...updates, updatedAt: new Date().toISOString() };
    this.repository.set(id, updated);
    return updated;
  }

  public delete(id: string): boolean {
    return this.repository.delete(id);
  }
}
