import { FinanceBillsReportModel, FinanceBillsReportValidator } from "@nexora/types/domains/finance/bills/FinanceBillsReport";

export class FinanceBillsReportService {
  private repository = new Map<string, FinanceBillsReportModel>();

  public create(data: Omit<FinanceBillsReportModel, "id" | "version" | "createdAt" | "updatedAt">): FinanceBillsReportModel {
    const id = "fina_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: FinanceBillsReportModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = FinanceBillsReportValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for FinanceBillsReport: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): FinanceBillsReportModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: FinanceBillsReportModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<FinanceBillsReportModel>): FinanceBillsReportModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: FinanceBillsReportModel = {
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
