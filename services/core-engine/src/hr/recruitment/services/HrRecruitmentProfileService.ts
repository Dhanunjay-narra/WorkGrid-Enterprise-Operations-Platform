import { HrRecruitmentProfileModel, HrRecruitmentProfileValidator } from "@nexora/types/domains/hr/recruitment/HrRecruitmentProfile";

export class HrRecruitmentProfileService {
  private repository = new Map<string, HrRecruitmentProfileModel>();

  public create(data: Omit<HrRecruitmentProfileModel, "id" | "version" | "createdAt" | "updatedAt">): HrRecruitmentProfileModel {
    const id = "hr_r_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: HrRecruitmentProfileModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = HrRecruitmentProfileValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for HrRecruitmentProfile: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): HrRecruitmentProfileModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: HrRecruitmentProfileModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<HrRecruitmentProfileModel>): HrRecruitmentProfileModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: HrRecruitmentProfileModel = {
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
