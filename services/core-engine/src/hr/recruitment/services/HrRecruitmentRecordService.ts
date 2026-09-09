import { HrRecruitmentRecordModel, HrRecruitmentRecordValidator } from "@nexora/types/domains/hr/recruitment/HrRecruitmentRecord";

export class HrRecruitmentRecordService {
  private repository = new Map<string, HrRecruitmentRecordModel>();

  public create(data: Omit<HrRecruitmentRecordModel, "id" | "version" | "createdAt" | "updatedAt">): HrRecruitmentRecordModel {
    const id = "hr_r_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: HrRecruitmentRecordModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = HrRecruitmentRecordValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for HrRecruitmentRecord: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): HrRecruitmentRecordModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: HrRecruitmentRecordModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<HrRecruitmentRecordModel>): HrRecruitmentRecordModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: HrRecruitmentRecordModel = {
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
