import { HrRecruitmentReportModel, HrRecruitmentReportValidator } from "@nexora/types/domains/hr/recruitment/HrRecruitmentReport";

export class HrRecruitmentReportService {
  private repository = new Map<string, HrRecruitmentReportModel>();

  public create(data: Omit<HrRecruitmentReportModel, "id" | "version" | "createdAt" | "updatedAt">): HrRecruitmentReportModel {
    const id = "hr_r_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: HrRecruitmentReportModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = HrRecruitmentReportValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for HrRecruitmentReport: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): HrRecruitmentReportModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: HrRecruitmentReportModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<HrRecruitmentReportModel>): HrRecruitmentReportModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: HrRecruitmentReportModel = {
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
