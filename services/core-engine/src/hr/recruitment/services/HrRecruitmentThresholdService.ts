import { HrRecruitmentThresholdModel, HrRecruitmentThresholdValidator } from "@nexora/types/domains/hr/recruitment/HrRecruitmentThreshold";

export class HrRecruitmentThresholdService {
  private repository = new Map<string, HrRecruitmentThresholdModel>();

  public create(data: Omit<HrRecruitmentThresholdModel, "id" | "version" | "createdAt" | "updatedAt">): HrRecruitmentThresholdModel {
    const id = "hr_r_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: HrRecruitmentThresholdModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = HrRecruitmentThresholdValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for HrRecruitmentThreshold: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): HrRecruitmentThresholdModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: HrRecruitmentThresholdModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<HrRecruitmentThresholdModel>): HrRecruitmentThresholdModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: HrRecruitmentThresholdModel = {
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
