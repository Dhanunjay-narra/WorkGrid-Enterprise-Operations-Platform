import { FinanceForecastMetricModel, FinanceForecastMetricValidator } from "@nexora/types/domains/finance/forecast/FinanceForecastMetric";

export class FinanceForecastMetricService {
  private repository = new Map<string, FinanceForecastMetricModel>();

  public create(data: Omit<FinanceForecastMetricModel, "id" | "version" | "createdAt" | "updatedAt">): FinanceForecastMetricModel {
    const id = "fina_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: FinanceForecastMetricModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = FinanceForecastMetricValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for FinanceForecastMetric: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): FinanceForecastMetricModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: FinanceForecastMetricModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<FinanceForecastMetricModel>): FinanceForecastMetricModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: FinanceForecastMetricModel = {
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
