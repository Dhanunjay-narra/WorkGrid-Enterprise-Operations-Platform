import { HrLeaveSummaryModel, HrLeaveSummaryValidator } from "@nexora/types/domains/hr/leave/HrLeaveSummary";

export class HrLeaveSummaryService {
  private repository = new Map<string, HrLeaveSummaryModel>();

  public create(data: Omit<HrLeaveSummaryModel, "id" | "version" | "createdAt" | "updatedAt">): HrLeaveSummaryModel {
    const id = "hr_l_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: HrLeaveSummaryModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = HrLeaveSummaryValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for HrLeaveSummary: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): HrLeaveSummaryModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: HrLeaveSummaryModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<HrLeaveSummaryModel>): HrLeaveSummaryModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: HrLeaveSummaryModel = {
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
