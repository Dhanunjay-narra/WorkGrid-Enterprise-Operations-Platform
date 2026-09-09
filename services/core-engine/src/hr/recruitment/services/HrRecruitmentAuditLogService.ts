import { HrRecruitmentAuditLogModel, HrRecruitmentAuditLogValidator } from "@nexora/types/domains/hr/recruitment/HrRecruitmentAuditLog";

export class HrRecruitmentAuditLogService {
  private repository = new Map<string, HrRecruitmentAuditLogModel>();

  public create(data: Omit<HrRecruitmentAuditLogModel, "id" | "version" | "createdAt" | "updatedAt">): HrRecruitmentAuditLogModel {
    const id = "hr_r_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: HrRecruitmentAuditLogModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = HrRecruitmentAuditLogValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for HrRecruitmentAuditLog: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): HrRecruitmentAuditLogModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: HrRecruitmentAuditLogModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<HrRecruitmentAuditLogModel>): HrRecruitmentAuditLogModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: HrRecruitmentAuditLogModel = {
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
