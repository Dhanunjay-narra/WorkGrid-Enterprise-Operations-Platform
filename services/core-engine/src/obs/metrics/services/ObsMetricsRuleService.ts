import { ObsMetricsRuleModel, ObsMetricsRuleValidator } from "@nexora/types/domains/obs/metrics/ObsMetricsRule";

export class ObsMetricsRuleService {
  private repository = new Map<string, ObsMetricsRuleModel>();

  public create(data: Omit<ObsMetricsRuleModel, "id" | "version" | "createdAt" | "updatedAt">): ObsMetricsRuleModel {
    const id = "obs__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: ObsMetricsRuleModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = ObsMetricsRuleValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for ObsMetricsRule: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): ObsMetricsRuleModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: ObsMetricsRuleModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<ObsMetricsRuleModel>): ObsMetricsRuleModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: ObsMetricsRuleModel = {
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
