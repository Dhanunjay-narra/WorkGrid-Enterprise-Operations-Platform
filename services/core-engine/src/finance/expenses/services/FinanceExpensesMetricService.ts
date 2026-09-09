import { FinanceExpensesMetricModel, FinanceExpensesMetricValidator } from "@nexora/types/domains/finance/expenses/FinanceExpensesMetric";

export class FinanceExpensesMetricService {
  private repository = new Map<string, FinanceExpensesMetricModel>();

  public create(data: Omit<FinanceExpensesMetricModel, "id" | "version" | "createdAt" | "updatedAt">): FinanceExpensesMetricModel {
    const id = "fina_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: FinanceExpensesMetricModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = FinanceExpensesMetricValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for FinanceExpensesMetric: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): FinanceExpensesMetricModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: FinanceExpensesMetricModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<FinanceExpensesMetricModel>): FinanceExpensesMetricModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: FinanceExpensesMetricModel = {
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
