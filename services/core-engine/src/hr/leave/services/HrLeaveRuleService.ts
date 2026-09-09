import { HrLeaveRuleModel, HrLeaveRuleValidator } from "@nexora/types/domains/hr/leave/HrLeaveRule";

export class HrLeaveRuleService {
  private repository = new Map<string, HrLeaveRuleModel>();

  public create(data: Omit<HrLeaveRuleModel, "id" | "version" | "createdAt" | "updatedAt">): HrLeaveRuleModel {
    const id = "hr_l_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: HrLeaveRuleModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = HrLeaveRuleValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for HrLeaveRule: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): HrLeaveRuleModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: HrLeaveRuleModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<HrLeaveRuleModel>): HrLeaveRuleModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: HrLeaveRuleModel = {
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
