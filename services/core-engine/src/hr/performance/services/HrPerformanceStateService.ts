import { HrPerformanceStateModel, HrPerformanceStateValidator } from "@nexora/types/domains/hr/performance/HrPerformanceState";

export class HrPerformanceStateService {
  private repository = new Map<string, HrPerformanceStateModel>();

  public create(data: Omit<HrPerformanceStateModel, "id" | "version" | "createdAt" | "updatedAt">): HrPerformanceStateModel {
    const id = "hr_p_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: HrPerformanceStateModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = HrPerformanceStateValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for HrPerformanceState: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): HrPerformanceStateModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: HrPerformanceStateModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<HrPerformanceStateModel>): HrPerformanceStateModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: HrPerformanceStateModel = {
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
