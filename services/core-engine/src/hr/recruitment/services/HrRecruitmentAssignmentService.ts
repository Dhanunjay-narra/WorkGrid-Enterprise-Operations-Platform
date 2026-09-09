import { HrRecruitmentAssignmentModel, HrRecruitmentAssignmentValidator } from "@nexora/types/domains/hr/recruitment/HrRecruitmentAssignment";

export class HrRecruitmentAssignmentService {
  private repository = new Map<string, HrRecruitmentAssignmentModel>();

  public create(data: Omit<HrRecruitmentAssignmentModel, "id" | "version" | "createdAt" | "updatedAt">): HrRecruitmentAssignmentModel {
    const id = "hr_r_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: HrRecruitmentAssignmentModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = HrRecruitmentAssignmentValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for HrRecruitmentAssignment: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): HrRecruitmentAssignmentModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: HrRecruitmentAssignmentModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<HrRecruitmentAssignmentModel>): HrRecruitmentAssignmentModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: HrRecruitmentAssignmentModel = {
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
