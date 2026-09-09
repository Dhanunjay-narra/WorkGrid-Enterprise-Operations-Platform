import { FinanceLedgerItemModel, FinanceLedgerItemValidator } from "@nexora/types/domains/finance/ledger/FinanceLedgerItem";

export class FinanceLedgerItemService {
  private repository = new Map<string, FinanceLedgerItemModel>();

  public create(data: Omit<FinanceLedgerItemModel, "id" | "version" | "createdAt" | "updatedAt">): FinanceLedgerItemModel {
    const id = "fina_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: FinanceLedgerItemModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = FinanceLedgerItemValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for FinanceLedgerItem: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): FinanceLedgerItemModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: FinanceLedgerItemModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<FinanceLedgerItemModel>): FinanceLedgerItemModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: FinanceLedgerItemModel = {
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
