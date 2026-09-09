import { HrRecruitmentStateModel, HrRecruitmentStateValidator } from "@nexora/types/domains/hr/recruitment/HrRecruitmentState";

export class HrRecruitmentStateService {
  private repository = new Map<string, HrRecruitmentStateModel>();

  public create(data: Omit<HrRecruitmentStateModel, "id" | "version" | "createdAt" | "updatedAt">): HrRecruitmentStateModel {
    const id = "hr_r_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: HrRecruitmentStateModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = HrRecruitmentStateValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for HrRecruitmentState: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): HrRecruitmentStateModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: HrRecruitmentStateModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<HrRecruitmentStateModel>): HrRecruitmentStateModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: HrRecruitmentStateModel = {
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
