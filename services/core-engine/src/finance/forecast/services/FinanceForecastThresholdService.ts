import { FinanceForecastThresholdModel, FinanceForecastThresholdValidator } from "@nexora/types/domains/finance/forecast/FinanceForecastThreshold";

export class FinanceForecastThresholdService {
  private repository = new Map<string, FinanceForecastThresholdModel>();

  public create(data: Omit<FinanceForecastThresholdModel, "id" | "version" | "createdAt" | "updatedAt">): FinanceForecastThresholdModel {
    const id = "fina_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: FinanceForecastThresholdModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = FinanceForecastThresholdValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for FinanceForecastThreshold: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): FinanceForecastThresholdModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: FinanceForecastThresholdModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<FinanceForecastThresholdModel>): FinanceForecastThresholdModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: FinanceForecastThresholdModel = {
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
