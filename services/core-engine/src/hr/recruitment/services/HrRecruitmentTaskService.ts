import { HrRecruitmentTaskModel, HrRecruitmentTaskValidator } from "@nexora/types/domains/hr/recruitment/HrRecruitmentTask";

export class HrRecruitmentTaskService {
  private repository = new Map<string, HrRecruitmentTaskModel>();

  public create(data: Omit<HrRecruitmentTaskModel, "id" | "version" | "createdAt" | "updatedAt">): HrRecruitmentTaskModel {
    const id = "hr_r_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: HrRecruitmentTaskModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = HrRecruitmentTaskValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for HrRecruitmentTask: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): HrRecruitmentTaskModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: HrRecruitmentTaskModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<HrRecruitmentTaskModel>): HrRecruitmentTaskModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: HrRecruitmentTaskModel = {
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
