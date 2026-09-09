import { FinanceTaxesReportModel, FinanceTaxesReportValidator } from "@nexora/types/domains/finance/taxes/FinanceTaxesReport";

export class FinanceTaxesReportService {
  private repository = new Map<string, FinanceTaxesReportModel>();

  public create(data: Omit<FinanceTaxesReportModel, "id" | "version" | "createdAt" | "updatedAt">): FinanceTaxesReportModel {
    const id = "fina_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: FinanceTaxesReportModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = FinanceTaxesReportValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for FinanceTaxesReport: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): FinanceTaxesReportModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: FinanceTaxesReportModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<FinanceTaxesReportModel>): FinanceTaxesReportModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: FinanceTaxesReportModel = {
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
