import { FinanceExpensesSnapshotModel, FinanceExpensesSnapshotValidator } from "@nexora/types/domains/finance/expenses/FinanceExpensesSnapshot";

export class FinanceExpensesSnapshotService {
  private repository = new Map<string, FinanceExpensesSnapshotModel>();

  public create(data: Omit<FinanceExpensesSnapshotModel, "id" | "version" | "createdAt" | "updatedAt">): FinanceExpensesSnapshotModel {
    const id = "fina_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: FinanceExpensesSnapshotModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = FinanceExpensesSnapshotValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for FinanceExpensesSnapshot: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): FinanceExpensesSnapshotModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: FinanceExpensesSnapshotModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<FinanceExpensesSnapshotModel>): FinanceExpensesSnapshotModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: FinanceExpensesSnapshotModel = {
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
