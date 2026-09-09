import { HrPerformanceReportModel, HrPerformanceReportValidator } from "@nexora/types/domains/hr/performance/HrPerformanceReport";

export class HrPerformanceReportService {
  private repository = new Map<string, HrPerformanceReportModel>();

  public create(data: Omit<HrPerformanceReportModel, "id" | "version" | "createdAt" | "updatedAt">): HrPerformanceReportModel {
    const id = "hr_p_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: HrPerformanceReportModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = HrPerformanceReportValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for HrPerformanceReport: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): HrPerformanceReportModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: HrPerformanceReportModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<HrPerformanceReportModel>): HrPerformanceReportModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: HrPerformanceReportModel = {
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
