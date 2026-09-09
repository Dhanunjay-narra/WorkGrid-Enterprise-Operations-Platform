import { ObsProfilingReportModel, ObsProfilingReportValidator } from "@nexora/types/domains/obs/profiling/ObsProfilingReport";

export class ObsProfilingReportService {
  private repository = new Map<string, ObsProfilingReportModel>();

  public create(data: Omit<ObsProfilingReportModel, "id" | "version" | "createdAt" | "updatedAt">): ObsProfilingReportModel {
    const id = "obs__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: ObsProfilingReportModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = ObsProfilingReportValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for ObsProfilingReport: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): ObsProfilingReportModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: ObsProfilingReportModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<ObsProfilingReportModel>): ObsProfilingReportModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: ObsProfilingReportModel = {
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
