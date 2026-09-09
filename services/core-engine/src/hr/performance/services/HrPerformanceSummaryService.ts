import { HrPerformanceSummaryModel, HrPerformanceSummaryValidator } from "@nexora/types/domains/hr/performance/HrPerformanceSummary";

export class HrPerformanceSummaryService {
  private repository = new Map<string, HrPerformanceSummaryModel>();

  public create(data: Omit<HrPerformanceSummaryModel, "id" | "version" | "createdAt" | "updatedAt">): HrPerformanceSummaryModel {
    const id = "hr_p_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: HrPerformanceSummaryModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = HrPerformanceSummaryValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for HrPerformanceSummary: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): HrPerformanceSummaryModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: HrPerformanceSummaryModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<HrPerformanceSummaryModel>): HrPerformanceSummaryModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: HrPerformanceSummaryModel = {
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
