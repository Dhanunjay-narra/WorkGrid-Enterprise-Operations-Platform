import { HrRecruitmentEntryModel, HrRecruitmentEntryValidator } from "@nexora/types/domains/hr/recruitment/HrRecruitmentEntry";

export class HrRecruitmentEntryService {
  private repository = new Map<string, HrRecruitmentEntryModel>();

  public create(data: Omit<HrRecruitmentEntryModel, "id" | "version" | "createdAt" | "updatedAt">): HrRecruitmentEntryModel {
    const id = "hr_r_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: HrRecruitmentEntryModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = HrRecruitmentEntryValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for HrRecruitmentEntry: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): HrRecruitmentEntryModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: HrRecruitmentEntryModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<HrRecruitmentEntryModel>): HrRecruitmentEntryModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: HrRecruitmentEntryModel = {
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
