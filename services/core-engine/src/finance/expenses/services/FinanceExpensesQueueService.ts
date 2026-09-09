import { FinanceExpensesQueueModel, FinanceExpensesQueueValidator } from "@nexora/types/domains/finance/expenses/FinanceExpensesQueue";

export class FinanceExpensesQueueService {
  private repository = new Map<string, FinanceExpensesQueueModel>();

  public create(data: Omit<FinanceExpensesQueueModel, "id" | "version" | "createdAt" | "updatedAt">): FinanceExpensesQueueModel {
    const id = "fina_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: FinanceExpensesQueueModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = FinanceExpensesQueueValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for FinanceExpensesQueue: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): FinanceExpensesQueueModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: FinanceExpensesQueueModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<FinanceExpensesQueueModel>): FinanceExpensesQueueModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: FinanceExpensesQueueModel = {
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
