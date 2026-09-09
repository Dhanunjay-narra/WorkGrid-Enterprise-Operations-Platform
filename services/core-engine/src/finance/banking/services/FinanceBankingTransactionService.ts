import { FinanceBankingTransactionModel, FinanceBankingTransactionValidator } from "@nexora/types/domains/finance/banking/FinanceBankingTransaction";

export class FinanceBankingTransactionService {
  private repository = new Map<string, FinanceBankingTransactionModel>();

  public create(data: Omit<FinanceBankingTransactionModel, "id" | "version" | "createdAt" | "updatedAt">): FinanceBankingTransactionModel {
    const id = "fina_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: FinanceBankingTransactionModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = FinanceBankingTransactionValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for FinanceBankingTransaction: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): FinanceBankingTransactionModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: FinanceBankingTransactionModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<FinanceBankingTransactionModel>): FinanceBankingTransactionModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: FinanceBankingTransactionModel = {
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
