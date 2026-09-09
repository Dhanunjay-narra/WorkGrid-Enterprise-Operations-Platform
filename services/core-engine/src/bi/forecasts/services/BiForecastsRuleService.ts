import { BiForecastsRuleModel, BiForecastsRuleValidator } from "@nexora/types/domains/bi/forecasts/BiForecastsRule";

export class BiForecastsRuleService {
  private repository = new Map<string, BiForecastsRuleModel>();

  public create(data: Omit<BiForecastsRuleModel, "id" | "version" | "createdAt" | "updatedAt">): BiForecastsRuleModel {
    const id = "bi_f_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: BiForecastsRuleModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = BiForecastsRuleValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for BiForecastsRule: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): BiForecastsRuleModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: BiForecastsRuleModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<BiForecastsRuleModel>): BiForecastsRuleModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: BiForecastsRuleModel = {
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
