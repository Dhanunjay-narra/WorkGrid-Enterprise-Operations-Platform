import { HrRecruitmentSnapshotModel, HrRecruitmentSnapshotValidator } from "@nexora/types/domains/hr/recruitment/HrRecruitmentSnapshot";

export class HrRecruitmentSnapshotService {
  private repository = new Map<string, HrRecruitmentSnapshotModel>();

  public create(data: Omit<HrRecruitmentSnapshotModel, "id" | "version" | "createdAt" | "updatedAt">): HrRecruitmentSnapshotModel {
    const id = "hr_r_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: HrRecruitmentSnapshotModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = HrRecruitmentSnapshotValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for HrRecruitmentSnapshot: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): HrRecruitmentSnapshotModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: HrRecruitmentSnapshotModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<HrRecruitmentSnapshotModel>): HrRecruitmentSnapshotModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: HrRecruitmentSnapshotModel = {
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
