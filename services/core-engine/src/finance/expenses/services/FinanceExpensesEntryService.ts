import { FinanceExpensesEntryModel, FinanceExpensesEntryValidator } from "@nexora/types/domains/finance/expenses/FinanceExpensesEntry";

export class FinanceExpensesEntryService {
  private repository = new Map<string, FinanceExpensesEntryModel>();

  public create(data: Omit<FinanceExpensesEntryModel, "id" | "version" | "createdAt" | "updatedAt">): FinanceExpensesEntryModel {
    const id = "fina_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: FinanceExpensesEntryModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = FinanceExpensesEntryValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for FinanceExpensesEntry: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): FinanceExpensesEntryModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: FinanceExpensesEntryModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<FinanceExpensesEntryModel>): FinanceExpensesEntryModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: FinanceExpensesEntryModel = {
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
