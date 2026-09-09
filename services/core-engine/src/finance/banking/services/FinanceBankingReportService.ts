import { FinanceBankingReportModel, FinanceBankingReportValidator } from "@nexora/types/domains/finance/banking/FinanceBankingReport";

export class FinanceBankingReportService {
  private repository = new Map<string, FinanceBankingReportModel>();

  public create(data: Omit<FinanceBankingReportModel, "id" | "version" | "createdAt" | "updatedAt">): FinanceBankingReportModel {
    const id = "fina_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: FinanceBankingReportModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = FinanceBankingReportValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for FinanceBankingReport: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): FinanceBankingReportModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: FinanceBankingReportModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<FinanceBankingReportModel>): FinanceBankingReportModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: FinanceBankingReportModel = {
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
