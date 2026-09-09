import { FinanceLedgerMetricModel, FinanceLedgerMetricValidator } from "@nexora/types/domains/finance/ledger/FinanceLedgerMetric";

export class FinanceLedgerMetricService {
  private repository = new Map<string, FinanceLedgerMetricModel>();

  public create(data: Omit<FinanceLedgerMetricModel, "id" | "version" | "createdAt" | "updatedAt">): FinanceLedgerMetricModel {
    const id = "fina_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: FinanceLedgerMetricModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = FinanceLedgerMetricValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for FinanceLedgerMetric: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): FinanceLedgerMetricModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: FinanceLedgerMetricModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<FinanceLedgerMetricModel>): FinanceLedgerMetricModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: FinanceLedgerMetricModel = {
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
