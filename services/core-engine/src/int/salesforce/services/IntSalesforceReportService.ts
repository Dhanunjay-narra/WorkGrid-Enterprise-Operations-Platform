import { IntSalesforceReportModel, IntSalesforceReportValidator } from "@nexora/types/domains/int/salesforce/IntSalesforceReport";

export class IntSalesforceReportService {
  private repository = new Map<string, IntSalesforceReportModel>();

  public create(data: Omit<IntSalesforceReportModel, "id" | "version" | "createdAt" | "updatedAt">): IntSalesforceReportModel {
    const id = "int__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: IntSalesforceReportModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = IntSalesforceReportValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for IntSalesforceReport: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): IntSalesforceReportModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: IntSalesforceReportModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<IntSalesforceReportModel>): IntSalesforceReportModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: IntSalesforceReportModel = {
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
