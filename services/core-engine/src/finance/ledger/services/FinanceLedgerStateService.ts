import { FinanceLedgerStateModel, FinanceLedgerStateValidator } from "@nexora/types/domains/finance/ledger/FinanceLedgerState";

export class FinanceLedgerStateService {
  private repository = new Map<string, FinanceLedgerStateModel>();

  public create(data: Omit<FinanceLedgerStateModel, "id" | "version" | "createdAt" | "updatedAt">): FinanceLedgerStateModel {
    const id = "fina_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: FinanceLedgerStateModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = FinanceLedgerStateValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for FinanceLedgerState: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): FinanceLedgerStateModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: FinanceLedgerStateModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<FinanceLedgerStateModel>): FinanceLedgerStateModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: FinanceLedgerStateModel = {
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
