import { FinanceExpensesStateModel, FinanceExpensesStateValidator } from "@nexora/types/domains/finance/expenses/FinanceExpensesState";

export class FinanceExpensesStateService {
  private repository = new Map<string, FinanceExpensesStateModel>();

  public create(data: Omit<FinanceExpensesStateModel, "id" | "version" | "createdAt" | "updatedAt">): FinanceExpensesStateModel {
    const id = "fina_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: FinanceExpensesStateModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = FinanceExpensesStateValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for FinanceExpensesState: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): FinanceExpensesStateModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: FinanceExpensesStateModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<FinanceExpensesStateModel>): FinanceExpensesStateModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: FinanceExpensesStateModel = {
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
