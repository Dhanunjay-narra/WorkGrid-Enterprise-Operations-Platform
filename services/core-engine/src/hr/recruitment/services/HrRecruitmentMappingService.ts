import { HrRecruitmentMappingModel, HrRecruitmentMappingValidator } from "@nexora/types/domains/hr/recruitment/HrRecruitmentMapping";

export class HrRecruitmentMappingService {
  private repository = new Map<string, HrRecruitmentMappingModel>();

  public create(data: Omit<HrRecruitmentMappingModel, "id" | "version" | "createdAt" | "updatedAt">): HrRecruitmentMappingModel {
    const id = "hr_r_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: HrRecruitmentMappingModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = HrRecruitmentMappingValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for HrRecruitmentMapping: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): HrRecruitmentMappingModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: HrRecruitmentMappingModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<HrRecruitmentMappingModel>): HrRecruitmentMappingModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: HrRecruitmentMappingModel = {
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
