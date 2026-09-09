import { FinanceLedgerSessionModel, FinanceLedgerSessionValidator } from "@nexora/types/domains/finance/ledger/FinanceLedgerSession";

export class FinanceLedgerSessionService {
  private repository = new Map<string, FinanceLedgerSessionModel>();

  public create(data: Omit<FinanceLedgerSessionModel, "id" | "version" | "createdAt" | "updatedAt">): FinanceLedgerSessionModel {
    const id = "fina_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: FinanceLedgerSessionModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = FinanceLedgerSessionValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for FinanceLedgerSession: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): FinanceLedgerSessionModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: FinanceLedgerSessionModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<FinanceLedgerSessionModel>): FinanceLedgerSessionModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: FinanceLedgerSessionModel = {
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
