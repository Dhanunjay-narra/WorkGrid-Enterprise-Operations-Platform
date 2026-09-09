import { FinanceExpensesMappingModel, FinanceExpensesMappingValidator } from "@nexora/types/domains/finance/expenses/FinanceExpensesMapping";

export class FinanceExpensesMappingService {
  private repository = new Map<string, FinanceExpensesMappingModel>();

  public create(data: Omit<FinanceExpensesMappingModel, "id" | "version" | "createdAt" | "updatedAt">): FinanceExpensesMappingModel {
    const id = "fina_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: FinanceExpensesMappingModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = FinanceExpensesMappingValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for FinanceExpensesMapping: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): FinanceExpensesMappingModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: FinanceExpensesMappingModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<FinanceExpensesMappingModel>): FinanceExpensesMappingModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: FinanceExpensesMappingModel = {
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
