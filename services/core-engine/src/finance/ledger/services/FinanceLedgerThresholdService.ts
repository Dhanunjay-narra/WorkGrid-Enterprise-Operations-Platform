import { FinanceLedgerThresholdModel, FinanceLedgerThresholdValidator } from "@nexora/types/domains/finance/ledger/FinanceLedgerThreshold";

export class FinanceLedgerThresholdService {
  private repository = new Map<string, FinanceLedgerThresholdModel>();

  public create(data: Omit<FinanceLedgerThresholdModel, "id" | "version" | "createdAt" | "updatedAt">): FinanceLedgerThresholdModel {
    const id = "fina_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: FinanceLedgerThresholdModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = FinanceLedgerThresholdValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for FinanceLedgerThreshold: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): FinanceLedgerThresholdModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: FinanceLedgerThresholdModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<FinanceLedgerThresholdModel>): FinanceLedgerThresholdModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: FinanceLedgerThresholdModel = {
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
