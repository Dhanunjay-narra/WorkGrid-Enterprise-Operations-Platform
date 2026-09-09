import { ObsAlertsRuleModel, ObsAlertsRuleValidator } from "@nexora/types/domains/obs/alerts/ObsAlertsRule";

export class ObsAlertsRuleService {
  private repository = new Map<string, ObsAlertsRuleModel>();

  public create(data: Omit<ObsAlertsRuleModel, "id" | "version" | "createdAt" | "updatedAt">): ObsAlertsRuleModel {
    const id = "obs__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: ObsAlertsRuleModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = ObsAlertsRuleValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for ObsAlertsRule: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): ObsAlertsRuleModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: ObsAlertsRuleModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<ObsAlertsRuleModel>): ObsAlertsRuleModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: ObsAlertsRuleModel = {
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
