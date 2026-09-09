import { FinanceLedgerBatchModel, FinanceLedgerBatchValidator } from "@nexora/types/domains/finance/ledger/FinanceLedgerBatch";

export class FinanceLedgerBatchService {
  private repository = new Map<string, FinanceLedgerBatchModel>();

  public create(data: Omit<FinanceLedgerBatchModel, "id" | "version" | "createdAt" | "updatedAt">): FinanceLedgerBatchModel {
    const id = "fina_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: FinanceLedgerBatchModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = FinanceLedgerBatchValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for FinanceLedgerBatch: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): FinanceLedgerBatchModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: FinanceLedgerBatchModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<FinanceLedgerBatchModel>): FinanceLedgerBatchModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: FinanceLedgerBatchModel = {
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
