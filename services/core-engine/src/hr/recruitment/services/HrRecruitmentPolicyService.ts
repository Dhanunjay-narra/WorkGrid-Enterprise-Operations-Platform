import { HrRecruitmentPolicyModel, HrRecruitmentPolicyValidator } from "@nexora/types/domains/hr/recruitment/HrRecruitmentPolicy";

export class HrRecruitmentPolicyService {
  private repository = new Map<string, HrRecruitmentPolicyModel>();

  public create(data: Omit<HrRecruitmentPolicyModel, "id" | "version" | "createdAt" | "updatedAt">): HrRecruitmentPolicyModel {
    const id = "hr_r_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: HrRecruitmentPolicyModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = HrRecruitmentPolicyValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for HrRecruitmentPolicy: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): HrRecruitmentPolicyModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: HrRecruitmentPolicyModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<HrRecruitmentPolicyModel>): HrRecruitmentPolicyModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: HrRecruitmentPolicyModel = {
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
