import { FinanceBankingSummaryModel, FinanceBankingSummaryValidator } from "@nexora/types/domains/finance/banking/FinanceBankingSummary";

export class FinanceBankingSummaryService {
  private repository = new Map<string, FinanceBankingSummaryModel>();

  public create(data: Omit<FinanceBankingSummaryModel, "id" | "version" | "createdAt" | "updatedAt">): FinanceBankingSummaryModel {
    const id = "fina_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: FinanceBankingSummaryModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = FinanceBankingSummaryValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for FinanceBankingSummary: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): FinanceBankingSummaryModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: FinanceBankingSummaryModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<FinanceBankingSummaryModel>): FinanceBankingSummaryModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: FinanceBankingSummaryModel = {
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
