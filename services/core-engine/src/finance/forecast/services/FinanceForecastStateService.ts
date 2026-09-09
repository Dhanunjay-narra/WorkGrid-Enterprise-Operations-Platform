import { FinanceForecastStateModel, FinanceForecastStateValidator } from "@nexora/types/domains/finance/forecast/FinanceForecastState";

export class FinanceForecastStateService {
  private repository = new Map<string, FinanceForecastStateModel>();

  public create(data: Omit<FinanceForecastStateModel, "id" | "version" | "createdAt" | "updatedAt">): FinanceForecastStateModel {
    const id = "fina_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: FinanceForecastStateModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = FinanceForecastStateValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for FinanceForecastState: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): FinanceForecastStateModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: FinanceForecastStateModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<FinanceForecastStateModel>): FinanceForecastStateModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: FinanceForecastStateModel = {
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
