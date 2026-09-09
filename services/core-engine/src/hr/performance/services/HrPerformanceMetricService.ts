import { HrPerformanceMetricModel, HrPerformanceMetricValidator } from "@nexora/types/domains/hr/performance/HrPerformanceMetric";

export class HrPerformanceMetricService {
  private repository = new Map<string, HrPerformanceMetricModel>();

  public create(data: Omit<HrPerformanceMetricModel, "id" | "version" | "createdAt" | "updatedAt">): HrPerformanceMetricModel {
    const id = "hr_p_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: HrPerformanceMetricModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = HrPerformanceMetricValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for HrPerformanceMetric: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): HrPerformanceMetricModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: HrPerformanceMetricModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<HrPerformanceMetricModel>): HrPerformanceMetricModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: HrPerformanceMetricModel = {
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
