import { FinanceLedgerRecordModel, FinanceLedgerRecordValidator } from "@nexora/types/domains/finance/ledger/FinanceLedgerRecord";

export class FinanceLedgerRecordService {
  private repository = new Map<string, FinanceLedgerRecordModel>();

  public create(data: Omit<FinanceLedgerRecordModel, "id" | "version" | "createdAt" | "updatedAt">): FinanceLedgerRecordModel {
    const id = "fina_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: FinanceLedgerRecordModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = FinanceLedgerRecordValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for FinanceLedgerRecord: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): FinanceLedgerRecordModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: FinanceLedgerRecordModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<FinanceLedgerRecordModel>): FinanceLedgerRecordModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: FinanceLedgerRecordModel = {
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
