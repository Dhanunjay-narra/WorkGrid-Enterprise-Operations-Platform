import { FinanceLedgerReportModel, FinanceLedgerReportValidator } from "@nexora/types/domains/finance/ledger/FinanceLedgerReport";

export class FinanceLedgerReportService {
  private repository = new Map<string, FinanceLedgerReportModel>();

  public create(data: Omit<FinanceLedgerReportModel, "id" | "version" | "createdAt" | "updatedAt">): FinanceLedgerReportModel {
    const id = "fina_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: FinanceLedgerReportModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = FinanceLedgerReportValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for FinanceLedgerReport: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): FinanceLedgerReportModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: FinanceLedgerReportModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<FinanceLedgerReportModel>): FinanceLedgerReportModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: FinanceLedgerReportModel = {
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
