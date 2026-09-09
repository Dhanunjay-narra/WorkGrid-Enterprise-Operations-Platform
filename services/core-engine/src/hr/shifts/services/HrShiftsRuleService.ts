import { HrShiftsRuleModel, HrShiftsRuleValidator } from "@nexora/types/domains/hr/shifts/HrShiftsRule";

export class HrShiftsRuleService {
  private repository = new Map<string, HrShiftsRuleModel>();

  public create(data: Omit<HrShiftsRuleModel, "id" | "version" | "createdAt" | "updatedAt">): HrShiftsRuleModel {
    const id = "hr_s_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: HrShiftsRuleModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = HrShiftsRuleValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for HrShiftsRule: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): HrShiftsRuleModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: HrShiftsRuleModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<HrShiftsRuleModel>): HrShiftsRuleModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: HrShiftsRuleModel = {
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
