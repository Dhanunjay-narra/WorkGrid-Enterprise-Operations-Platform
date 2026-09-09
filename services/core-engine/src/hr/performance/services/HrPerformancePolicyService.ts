import { HrPerformancePolicyModel, HrPerformancePolicyValidator } from "@nexora/types/domains/hr/performance/HrPerformancePolicy";

export class HrPerformancePolicyService {
  private repository = new Map<string, HrPerformancePolicyModel>();

  public create(data: Omit<HrPerformancePolicyModel, "id" | "version" | "createdAt" | "updatedAt">): HrPerformancePolicyModel {
    const id = "hr_p_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: HrPerformancePolicyModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = HrPerformancePolicyValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for HrPerformancePolicy: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): HrPerformancePolicyModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: HrPerformancePolicyModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<HrPerformancePolicyModel>): HrPerformancePolicyModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: HrPerformancePolicyModel = {
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
