import { FinanceExpensesSummaryModel, FinanceExpensesSummaryValidator } from "@nexora/types/domains/finance/expenses/FinanceExpensesSummary";

export class FinanceExpensesSummaryService {
  private repository = new Map<string, FinanceExpensesSummaryModel>();

  public create(data: Omit<FinanceExpensesSummaryModel, "id" | "version" | "createdAt" | "updatedAt">): FinanceExpensesSummaryModel {
    const id = "fina_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: FinanceExpensesSummaryModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = FinanceExpensesSummaryValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for FinanceExpensesSummary: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): FinanceExpensesSummaryModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: FinanceExpensesSummaryModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<FinanceExpensesSummaryModel>): FinanceExpensesSummaryModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: FinanceExpensesSummaryModel = {
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
