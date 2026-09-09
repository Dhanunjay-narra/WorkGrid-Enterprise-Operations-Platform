import { HrRecruitmentTransactionModel, HrRecruitmentTransactionValidator } from "@nexora/types/domains/hr/recruitment/HrRecruitmentTransaction";

export class HrRecruitmentTransactionService {
  private repository = new Map<string, HrRecruitmentTransactionModel>();

  public create(data: Omit<HrRecruitmentTransactionModel, "id" | "version" | "createdAt" | "updatedAt">): HrRecruitmentTransactionModel {
    const id = "hr_r_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: HrRecruitmentTransactionModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = HrRecruitmentTransactionValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for HrRecruitmentTransaction: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): HrRecruitmentTransactionModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: HrRecruitmentTransactionModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<HrRecruitmentTransactionModel>): HrRecruitmentTransactionModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: HrRecruitmentTransactionModel = {
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
