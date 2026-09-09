import { FinanceExpensesNodeModel, FinanceExpensesNodeValidator } from "@nexora/types/domains/finance/expenses/FinanceExpensesNode";

export class FinanceExpensesNodeService {
  private repository = new Map<string, FinanceExpensesNodeModel>();

  public create(data: Omit<FinanceExpensesNodeModel, "id" | "version" | "createdAt" | "updatedAt">): FinanceExpensesNodeModel {
    const id = "fina_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: FinanceExpensesNodeModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = FinanceExpensesNodeValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for FinanceExpensesNode: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): FinanceExpensesNodeModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: FinanceExpensesNodeModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<FinanceExpensesNodeModel>): FinanceExpensesNodeModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: FinanceExpensesNodeModel = {
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
