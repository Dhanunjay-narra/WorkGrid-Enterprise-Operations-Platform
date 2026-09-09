import { FinanceForecastEventModel, FinanceForecastEventValidator } from "@nexora/types/domains/finance/forecast/FinanceForecastEvent";

export class FinanceForecastEventService {
  private repository = new Map<string, FinanceForecastEventModel>();

  public create(data: Omit<FinanceForecastEventModel, "id" | "version" | "createdAt" | "updatedAt">): FinanceForecastEventModel {
    const id = "fina_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: FinanceForecastEventModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = FinanceForecastEventValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for FinanceForecastEvent: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): FinanceForecastEventModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: FinanceForecastEventModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<FinanceForecastEventModel>): FinanceForecastEventModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: FinanceForecastEventModel = {
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
