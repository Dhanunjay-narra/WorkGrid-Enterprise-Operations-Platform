import { FinanceForecastPolicyModel, FinanceForecastPolicyValidator } from "@nexora/types/domains/finance/forecast/FinanceForecastPolicy";

export class FinanceForecastPolicyService {
  private repository = new Map<string, FinanceForecastPolicyModel>();

  public create(data: Omit<FinanceForecastPolicyModel, "id" | "version" | "createdAt" | "updatedAt">): FinanceForecastPolicyModel {
    const id = "fina_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: FinanceForecastPolicyModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = FinanceForecastPolicyValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for FinanceForecastPolicy: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): FinanceForecastPolicyModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: FinanceForecastPolicyModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<FinanceForecastPolicyModel>): FinanceForecastPolicyModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: FinanceForecastPolicyModel = {
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
