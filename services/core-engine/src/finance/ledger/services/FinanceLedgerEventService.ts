import { FinanceLedgerEventModel, FinanceLedgerEventValidator } from "@nexora/types/domains/finance/ledger/FinanceLedgerEvent";

export class FinanceLedgerEventService {
  private repository = new Map<string, FinanceLedgerEventModel>();

  public create(data: Omit<FinanceLedgerEventModel, "id" | "version" | "createdAt" | "updatedAt">): FinanceLedgerEventModel {
    const id = "fina_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: FinanceLedgerEventModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = FinanceLedgerEventValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for FinanceLedgerEvent: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): FinanceLedgerEventModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: FinanceLedgerEventModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<FinanceLedgerEventModel>): FinanceLedgerEventModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: FinanceLedgerEventModel = {
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
