import { FinanceExpensesProfileModel, FinanceExpensesProfileValidator } from "@nexora/types/domains/finance/expenses/FinanceExpensesProfile";

export class FinanceExpensesProfileService {
  private repository = new Map<string, FinanceExpensesProfileModel>();

  public create(data: Omit<FinanceExpensesProfileModel, "id" | "version" | "createdAt" | "updatedAt">): FinanceExpensesProfileModel {
    const id = "fina_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: FinanceExpensesProfileModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = FinanceExpensesProfileValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for FinanceExpensesProfile: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): FinanceExpensesProfileModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: FinanceExpensesProfileModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<FinanceExpensesProfileModel>): FinanceExpensesProfileModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: FinanceExpensesProfileModel = {
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
