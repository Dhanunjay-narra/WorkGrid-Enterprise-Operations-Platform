import { FinanceExpensesTaskModel, FinanceExpensesTaskValidator } from "@nexora/types/domains/finance/expenses/FinanceExpensesTask";

export class FinanceExpensesTaskService {
  private repository = new Map<string, FinanceExpensesTaskModel>();

  public create(data: Omit<FinanceExpensesTaskModel, "id" | "version" | "createdAt" | "updatedAt">): FinanceExpensesTaskModel {
    const id = "fina_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: FinanceExpensesTaskModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = FinanceExpensesTaskValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for FinanceExpensesTask: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): FinanceExpensesTaskModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: FinanceExpensesTaskModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<FinanceExpensesTaskModel>): FinanceExpensesTaskModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: FinanceExpensesTaskModel = {
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
