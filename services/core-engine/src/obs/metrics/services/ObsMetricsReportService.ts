import { ObsMetricsReportModel, ObsMetricsReportValidator } from "@nexora/types/domains/obs/metrics/ObsMetricsReport";

export class ObsMetricsReportService {
  private repository = new Map<string, ObsMetricsReportModel>();

  public create(data: Omit<ObsMetricsReportModel, "id" | "version" | "createdAt" | "updatedAt">): ObsMetricsReportModel {
    const id = "obs__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: ObsMetricsReportModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = ObsMetricsReportValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for ObsMetricsReport: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): ObsMetricsReportModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: ObsMetricsReportModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<ObsMetricsReportModel>): ObsMetricsReportModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: ObsMetricsReportModel = {
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
