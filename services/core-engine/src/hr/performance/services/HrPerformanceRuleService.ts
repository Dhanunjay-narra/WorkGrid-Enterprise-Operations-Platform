import { HrPerformanceRuleModel, HrPerformanceRuleValidator } from "@nexora/types/domains/hr/performance/HrPerformanceRule";

export class HrPerformanceRuleService {
  private repository = new Map<string, HrPerformanceRuleModel>();

  public create(data: Omit<HrPerformanceRuleModel, "id" | "version" | "createdAt" | "updatedAt">): HrPerformanceRuleModel {
    const id = "hr_p_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: HrPerformanceRuleModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = HrPerformanceRuleValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for HrPerformanceRule: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): HrPerformanceRuleModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: HrPerformanceRuleModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<HrPerformanceRuleModel>): HrPerformanceRuleModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: HrPerformanceRuleModel = {
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
