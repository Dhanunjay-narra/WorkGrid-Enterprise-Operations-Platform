import { SupportSurveysRuleModel, SupportSurveysRuleValidator } from "@nexora/types/domains/support/surveys/SupportSurveysRule";

export class SupportSurveysRuleService {
  private repository = new Map<string, SupportSurveysRuleModel>();

  public create(data: Omit<SupportSurveysRuleModel, "id" | "version" | "createdAt" | "updatedAt">): SupportSurveysRuleModel {
    const id = "supp_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: SupportSurveysRuleModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = SupportSurveysRuleValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for SupportSurveysRule: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): SupportSurveysRuleModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: SupportSurveysRuleModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<SupportSurveysRuleModel>): SupportSurveysRuleModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: SupportSurveysRuleModel = {
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
