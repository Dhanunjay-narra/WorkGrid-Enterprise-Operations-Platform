import { FinanceExpensesThresholdModel, FinanceExpensesThresholdValidator } from "@nexora/types/domains/finance/expenses/FinanceExpensesThreshold";

export class FinanceExpensesThresholdService {
  private repository = new Map<string, FinanceExpensesThresholdModel>();

  public create(data: Omit<FinanceExpensesThresholdModel, "id" | "version" | "createdAt" | "updatedAt">): FinanceExpensesThresholdModel {
    const id = "fina_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: FinanceExpensesThresholdModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = FinanceExpensesThresholdValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for FinanceExpensesThreshold: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): FinanceExpensesThresholdModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: FinanceExpensesThresholdModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<FinanceExpensesThresholdModel>): FinanceExpensesThresholdModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: FinanceExpensesThresholdModel = {
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
