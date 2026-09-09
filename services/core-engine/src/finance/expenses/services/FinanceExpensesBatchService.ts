import { FinanceExpensesBatchModel, FinanceExpensesBatchValidator } from "@nexora/types/domains/finance/expenses/FinanceExpensesBatch";

export class FinanceExpensesBatchService {
  private repository = new Map<string, FinanceExpensesBatchModel>();

  public create(data: Omit<FinanceExpensesBatchModel, "id" | "version" | "createdAt" | "updatedAt">): FinanceExpensesBatchModel {
    const id = "fina_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: FinanceExpensesBatchModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = FinanceExpensesBatchValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for FinanceExpensesBatch: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): FinanceExpensesBatchModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: FinanceExpensesBatchModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<FinanceExpensesBatchModel>): FinanceExpensesBatchModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: FinanceExpensesBatchModel = {
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
