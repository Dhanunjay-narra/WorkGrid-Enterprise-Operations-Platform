import { HrRecruitmentPayloadModel, HrRecruitmentPayloadValidator } from "@nexora/types/domains/hr/recruitment/HrRecruitmentPayload";

export class HrRecruitmentPayloadService {
  private repository = new Map<string, HrRecruitmentPayloadModel>();

  public create(data: Omit<HrRecruitmentPayloadModel, "id" | "version" | "createdAt" | "updatedAt">): HrRecruitmentPayloadModel {
    const id = "hr_r_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: HrRecruitmentPayloadModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = HrRecruitmentPayloadValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for HrRecruitmentPayload: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): HrRecruitmentPayloadModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: HrRecruitmentPayloadModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<HrRecruitmentPayloadModel>): HrRecruitmentPayloadModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: HrRecruitmentPayloadModel = {
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
