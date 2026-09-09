import { ObsSpansReportModel, ObsSpansReportValidator } from "@nexora/types/domains/obs/spans/ObsSpansReport";

export class ObsSpansReportService {
  private repository = new Map<string, ObsSpansReportModel>();

  public create(data: Omit<ObsSpansReportModel, "id" | "version" | "createdAt" | "updatedAt">): ObsSpansReportModel {
    const id = "obs__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: ObsSpansReportModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = ObsSpansReportValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for ObsSpansReport: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): ObsSpansReportModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: ObsSpansReportModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<ObsSpansReportModel>): ObsSpansReportModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: ObsSpansReportModel = {
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
