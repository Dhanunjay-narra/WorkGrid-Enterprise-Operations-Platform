import { FinanceExpensesRuleModel, FinanceExpensesRuleValidator } from "@nexora/types/domains/finance/expenses/FinanceExpensesRule";

export class FinanceExpensesRuleService {
  private repository = new Map<string, FinanceExpensesRuleModel>();

  public create(data: Omit<FinanceExpensesRuleModel, "id" | "version" | "createdAt" | "updatedAt">): FinanceExpensesRuleModel {
    const id = "fina_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: FinanceExpensesRuleModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = FinanceExpensesRuleValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for FinanceExpensesRule: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): FinanceExpensesRuleModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: FinanceExpensesRuleModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<FinanceExpensesRuleModel>): FinanceExpensesRuleModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: FinanceExpensesRuleModel = {
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
