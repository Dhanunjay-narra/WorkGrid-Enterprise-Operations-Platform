import { ObsTracingReportModel, ObsTracingReportValidator } from "@nexora/types/domains/obs/tracing/ObsTracingReport";

export class ObsTracingReportService {
  private repository = new Map<string, ObsTracingReportModel>();

  public create(data: Omit<ObsTracingReportModel, "id" | "version" | "createdAt" | "updatedAt">): ObsTracingReportModel {
    const id = "obs__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: ObsTracingReportModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = ObsTracingReportValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for ObsTracingReport: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): ObsTracingReportModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: ObsTracingReportModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<ObsTracingReportModel>): ObsTracingReportModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: ObsTracingReportModel = {
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
