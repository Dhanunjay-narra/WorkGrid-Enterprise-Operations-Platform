import { FinanceInvoicesSummaryModel, FinanceInvoicesSummaryValidator } from "@nexora/types/domains/finance/invoices/FinanceInvoicesSummary";

export class FinanceInvoicesSummaryService {
  private repository = new Map<string, FinanceInvoicesSummaryModel>();

  public create(data: Omit<FinanceInvoicesSummaryModel, "id" | "version" | "createdAt" | "updatedAt">): FinanceInvoicesSummaryModel {
    const id = "fina_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: FinanceInvoicesSummaryModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = FinanceInvoicesSummaryValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for FinanceInvoicesSummary: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): FinanceInvoicesSummaryModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: FinanceInvoicesSummaryModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<FinanceInvoicesSummaryModel>): FinanceInvoicesSummaryModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: FinanceInvoicesSummaryModel = {
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
