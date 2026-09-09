import { FinanceForecastRuleModel, FinanceForecastRuleValidator } from "@nexora/types/domains/finance/forecast/FinanceForecastRule";

export class FinanceForecastRuleService {
  private repository = new Map<string, FinanceForecastRuleModel>();

  public create(data: Omit<FinanceForecastRuleModel, "id" | "version" | "createdAt" | "updatedAt">): FinanceForecastRuleModel {
    const id = "fina_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: FinanceForecastRuleModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = FinanceForecastRuleValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for FinanceForecastRule: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): FinanceForecastRuleModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: FinanceForecastRuleModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<FinanceForecastRuleModel>): FinanceForecastRuleModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: FinanceForecastRuleModel = {
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
