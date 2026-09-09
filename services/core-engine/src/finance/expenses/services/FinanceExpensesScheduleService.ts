import { FinanceExpensesScheduleModel, FinanceExpensesScheduleValidator } from "@nexora/types/domains/finance/expenses/FinanceExpensesSchedule";

export class FinanceExpensesScheduleService {
  private repository = new Map<string, FinanceExpensesScheduleModel>();

  public create(data: Omit<FinanceExpensesScheduleModel, "id" | "version" | "createdAt" | "updatedAt">): FinanceExpensesScheduleModel {
    const id = "fina_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: FinanceExpensesScheduleModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = FinanceExpensesScheduleValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for FinanceExpensesSchedule: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): FinanceExpensesScheduleModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: FinanceExpensesScheduleModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<FinanceExpensesScheduleModel>): FinanceExpensesScheduleModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: FinanceExpensesScheduleModel = {
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
