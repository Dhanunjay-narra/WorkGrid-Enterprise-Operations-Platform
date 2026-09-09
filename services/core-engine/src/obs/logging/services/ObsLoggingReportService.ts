import { ObsLoggingReportModel, ObsLoggingReportValidator } from "@nexora/types/domains/obs/logging/ObsLoggingReport";

export class ObsLoggingReportService {
  private repository = new Map<string, ObsLoggingReportModel>();

  public create(data: Omit<ObsLoggingReportModel, "id" | "version" | "createdAt" | "updatedAt">): ObsLoggingReportModel {
    const id = "obs__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: ObsLoggingReportModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = ObsLoggingReportValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for ObsLoggingReport: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): ObsLoggingReportModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: ObsLoggingReportModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<ObsLoggingReportModel>): ObsLoggingReportModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: ObsLoggingReportModel = {
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
