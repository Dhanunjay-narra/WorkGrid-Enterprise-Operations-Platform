import { FinanceExpensesRecordModel, FinanceExpensesRecordValidator } from "@nexora/types/domains/finance/expenses/FinanceExpensesRecord";

export class FinanceExpensesRecordService {
  private repository = new Map<string, FinanceExpensesRecordModel>();

  public create(data: Omit<FinanceExpensesRecordModel, "id" | "version" | "createdAt" | "updatedAt">): FinanceExpensesRecordModel {
    const id = "fina_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: FinanceExpensesRecordModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = FinanceExpensesRecordValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for FinanceExpensesRecord: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): FinanceExpensesRecordModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: FinanceExpensesRecordModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<FinanceExpensesRecordModel>): FinanceExpensesRecordModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: FinanceExpensesRecordModel = {
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
