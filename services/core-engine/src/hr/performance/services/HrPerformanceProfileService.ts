import { HrPerformanceProfileModel, HrPerformanceProfileValidator } from "@nexora/types/domains/hr/performance/HrPerformanceProfile";

export class HrPerformanceProfileService {
  private repository = new Map<string, HrPerformanceProfileModel>();

  public create(data: Omit<HrPerformanceProfileModel, "id" | "version" | "createdAt" | "updatedAt">): HrPerformanceProfileModel {
    const id = "hr_p_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: HrPerformanceProfileModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = HrPerformanceProfileValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for HrPerformanceProfile: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): HrPerformanceProfileModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: HrPerformanceProfileModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<HrPerformanceProfileModel>): HrPerformanceProfileModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: HrPerformanceProfileModel = {
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
