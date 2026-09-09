import { FinanceExpensesItemModel, FinanceExpensesItemValidator } from "@nexora/types/domains/finance/expenses/FinanceExpensesItem";

export class FinanceExpensesItemService {
  private repository = new Map<string, FinanceExpensesItemModel>();

  public create(data: Omit<FinanceExpensesItemModel, "id" | "version" | "createdAt" | "updatedAt">): FinanceExpensesItemModel {
    const id = "fina_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: FinanceExpensesItemModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = FinanceExpensesItemValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for FinanceExpensesItem: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): FinanceExpensesItemModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: FinanceExpensesItemModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<FinanceExpensesItemModel>): FinanceExpensesItemModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: FinanceExpensesItemModel = {
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
