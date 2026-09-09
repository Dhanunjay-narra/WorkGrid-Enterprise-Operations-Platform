import { ObsSpansRuleModel, ObsSpansRuleValidator } from "@nexora/types/domains/obs/spans/ObsSpansRule";

export class ObsSpansRuleService {
  private repository = new Map<string, ObsSpansRuleModel>();

  public create(data: Omit<ObsSpansRuleModel, "id" | "version" | "createdAt" | "updatedAt">): ObsSpansRuleModel {
    const id = "obs__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: ObsSpansRuleModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = ObsSpansRuleValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for ObsSpansRule: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): ObsSpansRuleModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: ObsSpansRuleModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<ObsSpansRuleModel>): ObsSpansRuleModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: ObsSpansRuleModel = {
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
