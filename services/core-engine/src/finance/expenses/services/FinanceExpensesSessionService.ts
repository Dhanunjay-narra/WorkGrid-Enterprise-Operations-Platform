import { FinanceExpensesSessionModel, FinanceExpensesSessionValidator } from "@nexora/types/domains/finance/expenses/FinanceExpensesSession";

export class FinanceExpensesSessionService {
  private repository = new Map<string, FinanceExpensesSessionModel>();

  public create(data: Omit<FinanceExpensesSessionModel, "id" | "version" | "createdAt" | "updatedAt">): FinanceExpensesSessionModel {
    const id = "fina_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: FinanceExpensesSessionModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = FinanceExpensesSessionValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for FinanceExpensesSession: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): FinanceExpensesSessionModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: FinanceExpensesSessionModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<FinanceExpensesSessionModel>): FinanceExpensesSessionModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: FinanceExpensesSessionModel = {
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
