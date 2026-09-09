import { ObsDashboardsRuleModel, ObsDashboardsRuleValidator } from "@nexora/types/domains/obs/dashboards/ObsDashboardsRule";

export class ObsDashboardsRuleService {
  private repository = new Map<string, ObsDashboardsRuleModel>();

  public create(data: Omit<ObsDashboardsRuleModel, "id" | "version" | "createdAt" | "updatedAt">): ObsDashboardsRuleModel {
    const id = "obs__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: ObsDashboardsRuleModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = ObsDashboardsRuleValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for ObsDashboardsRule: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): ObsDashboardsRuleModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: ObsDashboardsRuleModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<ObsDashboardsRuleModel>): ObsDashboardsRuleModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: ObsDashboardsRuleModel = {
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
