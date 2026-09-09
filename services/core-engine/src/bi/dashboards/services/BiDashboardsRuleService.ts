import { BiDashboardsRuleModel, BiDashboardsRuleValidator } from "@nexora/types/domains/bi/dashboards/BiDashboardsRule";

export class BiDashboardsRuleService {
  private repository = new Map<string, BiDashboardsRuleModel>();

  public create(data: Omit<BiDashboardsRuleModel, "id" | "version" | "createdAt" | "updatedAt">): BiDashboardsRuleModel {
    const id = "bi_d_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: BiDashboardsRuleModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = BiDashboardsRuleValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for BiDashboardsRule: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): BiDashboardsRuleModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: BiDashboardsRuleModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<BiDashboardsRuleModel>): BiDashboardsRuleModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: BiDashboardsRuleModel = {
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
