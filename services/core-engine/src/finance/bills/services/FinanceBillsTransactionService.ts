import { FinanceBillsTransactionModel, FinanceBillsTransactionValidator } from "@nexora/types/domains/finance/bills/FinanceBillsTransaction";

export class FinanceBillsTransactionService {
  private repository = new Map<string, FinanceBillsTransactionModel>();

  public create(data: Omit<FinanceBillsTransactionModel, "id" | "version" | "createdAt" | "updatedAt">): FinanceBillsTransactionModel {
    const id = "fina_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: FinanceBillsTransactionModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = FinanceBillsTransactionValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for FinanceBillsTransaction: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): FinanceBillsTransactionModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: FinanceBillsTransactionModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<FinanceBillsTransactionModel>): FinanceBillsTransactionModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: FinanceBillsTransactionModel = {
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
