import { ObsDashboardsReportModel, ObsDashboardsReportValidator } from "@nexora/types/domains/obs/dashboards/ObsDashboardsReport";

export class ObsDashboardsReportService {
  private repository = new Map<string, ObsDashboardsReportModel>();

  public create(data: Omit<ObsDashboardsReportModel, "id" | "version" | "createdAt" | "updatedAt">): ObsDashboardsReportModel {
    const id = "obs__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: ObsDashboardsReportModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = ObsDashboardsReportValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for ObsDashboardsReport: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): ObsDashboardsReportModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: ObsDashboardsReportModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<ObsDashboardsReportModel>): ObsDashboardsReportModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: ObsDashboardsReportModel = {
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
