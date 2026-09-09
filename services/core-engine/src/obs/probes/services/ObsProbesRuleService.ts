import { ObsProbesRuleModel, ObsProbesRuleValidator } from "@nexora/types/domains/obs/probes/ObsProbesRule";

export class ObsProbesRuleService {
  private repository = new Map<string, ObsProbesRuleModel>();

  public create(data: Omit<ObsProbesRuleModel, "id" | "version" | "createdAt" | "updatedAt">): ObsProbesRuleModel {
    const id = "obs__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: ObsProbesRuleModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = ObsProbesRuleValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for ObsProbesRule: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): ObsProbesRuleModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: ObsProbesRuleModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<ObsProbesRuleModel>): ObsProbesRuleModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: ObsProbesRuleModel = {
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
