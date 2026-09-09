import { ObsTracingRuleModel, ObsTracingRuleValidator } from "@nexora/types/domains/obs/tracing/ObsTracingRule";

export class ObsTracingRuleService {
  private repository = new Map<string, ObsTracingRuleModel>();

  public create(data: Omit<ObsTracingRuleModel, "id" | "version" | "createdAt" | "updatedAt">): ObsTracingRuleModel {
    const id = "obs__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: ObsTracingRuleModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = ObsTracingRuleValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for ObsTracingRule: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): ObsTracingRuleModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: ObsTracingRuleModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<ObsTracingRuleModel>): ObsTracingRuleModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: ObsTracingRuleModel = {
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
