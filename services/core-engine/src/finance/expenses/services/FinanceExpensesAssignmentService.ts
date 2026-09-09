import { FinanceExpensesAssignmentModel, FinanceExpensesAssignmentValidator } from "@nexora/types/domains/finance/expenses/FinanceExpensesAssignment";

export class FinanceExpensesAssignmentService {
  private repository = new Map<string, FinanceExpensesAssignmentModel>();

  public create(data: Omit<FinanceExpensesAssignmentModel, "id" | "version" | "createdAt" | "updatedAt">): FinanceExpensesAssignmentModel {
    const id = "fina_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: FinanceExpensesAssignmentModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = FinanceExpensesAssignmentValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for FinanceExpensesAssignment: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): FinanceExpensesAssignmentModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: FinanceExpensesAssignmentModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<FinanceExpensesAssignmentModel>): FinanceExpensesAssignmentModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: FinanceExpensesAssignmentModel = {
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
