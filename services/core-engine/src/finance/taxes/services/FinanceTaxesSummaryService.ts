import { FinanceTaxesSummaryModel, FinanceTaxesSummaryValidator } from "@nexora/types/domains/finance/taxes/FinanceTaxesSummary";

export class FinanceTaxesSummaryService {
  private repository = new Map<string, FinanceTaxesSummaryModel>();

  public create(data: Omit<FinanceTaxesSummaryModel, "id" | "version" | "createdAt" | "updatedAt">): FinanceTaxesSummaryModel {
    const id = "fina_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: FinanceTaxesSummaryModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = FinanceTaxesSummaryValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for FinanceTaxesSummary: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): FinanceTaxesSummaryModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: FinanceTaxesSummaryModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<FinanceTaxesSummaryModel>): FinanceTaxesSummaryModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: FinanceTaxesSummaryModel = {
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
