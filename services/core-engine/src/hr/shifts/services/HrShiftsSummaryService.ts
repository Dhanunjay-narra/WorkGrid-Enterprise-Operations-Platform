import { HrShiftsSummaryModel, HrShiftsSummaryValidator } from "@nexora/types/domains/hr/shifts/HrShiftsSummary";

export class HrShiftsSummaryService {
  private repository = new Map<string, HrShiftsSummaryModel>();

  public create(data: Omit<HrShiftsSummaryModel, "id" | "version" | "createdAt" | "updatedAt">): HrShiftsSummaryModel {
    const id = "hr_s_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: HrShiftsSummaryModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = HrShiftsSummaryValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for HrShiftsSummary: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): HrShiftsSummaryModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: HrShiftsSummaryModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<HrShiftsSummaryModel>): HrShiftsSummaryModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: HrShiftsSummaryModel = {
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
