import { FinanceExpensesPayloadModel, FinanceExpensesPayloadValidator } from "@nexora/types/domains/finance/expenses/FinanceExpensesPayload";

export class FinanceExpensesPayloadService {
  private repository = new Map<string, FinanceExpensesPayloadModel>();

  public create(data: Omit<FinanceExpensesPayloadModel, "id" | "version" | "createdAt" | "updatedAt">): FinanceExpensesPayloadModel {
    const id = "fina_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: FinanceExpensesPayloadModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = FinanceExpensesPayloadValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for FinanceExpensesPayload: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): FinanceExpensesPayloadModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: FinanceExpensesPayloadModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<FinanceExpensesPayloadModel>): FinanceExpensesPayloadModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: FinanceExpensesPayloadModel = {
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
