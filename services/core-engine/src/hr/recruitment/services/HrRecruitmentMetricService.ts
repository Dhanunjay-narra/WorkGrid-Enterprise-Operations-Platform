import { HrRecruitmentMetricModel, HrRecruitmentMetricValidator } from "@nexora/types/domains/hr/recruitment/HrRecruitmentMetric";

export class HrRecruitmentMetricService {
  private repository = new Map<string, HrRecruitmentMetricModel>();

  public create(data: Omit<HrRecruitmentMetricModel, "id" | "version" | "createdAt" | "updatedAt">): HrRecruitmentMetricModel {
    const id = "hr_r_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: HrRecruitmentMetricModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = HrRecruitmentMetricValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for HrRecruitmentMetric: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): HrRecruitmentMetricModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: HrRecruitmentMetricModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<HrRecruitmentMetricModel>): HrRecruitmentMetricModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: HrRecruitmentMetricModel = {
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
