import { BiDashboardsReportModel, BiDashboardsReportValidator } from "@nexora/types/domains/bi/dashboards/BiDashboardsReport";

export class BiDashboardsReportService {
  private repository = new Map<string, BiDashboardsReportModel>();

  public create(data: Omit<BiDashboardsReportModel, "id" | "version" | "createdAt" | "updatedAt">): BiDashboardsReportModel {
    const id = "bi_d_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: BiDashboardsReportModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = BiDashboardsReportValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for BiDashboardsReport: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): BiDashboardsReportModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: BiDashboardsReportModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<BiDashboardsReportModel>): BiDashboardsReportModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: BiDashboardsReportModel = {
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
