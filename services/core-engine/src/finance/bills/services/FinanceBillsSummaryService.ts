import { FinanceBillsSummaryModel, FinanceBillsSummaryValidator } from "@nexora/types/domains/finance/bills/FinanceBillsSummary";

export class FinanceBillsSummaryService {
  private repository = new Map<string, FinanceBillsSummaryModel>();

  public create(data: Omit<FinanceBillsSummaryModel, "id" | "version" | "createdAt" | "updatedAt">): FinanceBillsSummaryModel {
    const id = "fina_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: FinanceBillsSummaryModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = FinanceBillsSummaryValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for FinanceBillsSummary: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): FinanceBillsSummaryModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: FinanceBillsSummaryModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<FinanceBillsSummaryModel>): FinanceBillsSummaryModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: FinanceBillsSummaryModel = {
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
