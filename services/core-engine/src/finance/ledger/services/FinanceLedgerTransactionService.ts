import { FinanceLedgerTransactionModel, FinanceLedgerTransactionValidator } from "@nexora/types/domains/finance/ledger/FinanceLedgerTransaction";

export class FinanceLedgerTransactionService {
  private repository = new Map<string, FinanceLedgerTransactionModel>();

  public create(data: Omit<FinanceLedgerTransactionModel, "id" | "version" | "createdAt" | "updatedAt">): FinanceLedgerTransactionModel {
    const id = "fina_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: FinanceLedgerTransactionModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = FinanceLedgerTransactionValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for FinanceLedgerTransaction: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): FinanceLedgerTransactionModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: FinanceLedgerTransactionModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<FinanceLedgerTransactionModel>): FinanceLedgerTransactionModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: FinanceLedgerTransactionModel = {
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
