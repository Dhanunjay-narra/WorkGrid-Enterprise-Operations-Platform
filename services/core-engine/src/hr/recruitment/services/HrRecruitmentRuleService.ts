import { HrRecruitmentRuleModel, HrRecruitmentRuleValidator } from "@nexora/types/domains/hr/recruitment/HrRecruitmentRule";

export class HrRecruitmentRuleService {
  private repository = new Map<string, HrRecruitmentRuleModel>();

  public create(data: Omit<HrRecruitmentRuleModel, "id" | "version" | "createdAt" | "updatedAt">): HrRecruitmentRuleModel {
    const id = "hr_r_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: HrRecruitmentRuleModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = HrRecruitmentRuleValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for HrRecruitmentRule: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): HrRecruitmentRuleModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: HrRecruitmentRuleModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<HrRecruitmentRuleModel>): HrRecruitmentRuleModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: HrRecruitmentRuleModel = {
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
