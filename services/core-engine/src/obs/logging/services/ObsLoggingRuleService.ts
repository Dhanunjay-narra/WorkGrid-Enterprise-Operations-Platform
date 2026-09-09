import { ObsLoggingRuleModel, ObsLoggingRuleValidator } from "@nexora/types/domains/obs/logging/ObsLoggingRule";

export class ObsLoggingRuleService {
  private repository = new Map<string, ObsLoggingRuleModel>();

  public create(data: Omit<ObsLoggingRuleModel, "id" | "version" | "createdAt" | "updatedAt">): ObsLoggingRuleModel {
    const id = "obs__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: ObsLoggingRuleModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = ObsLoggingRuleValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for ObsLoggingRule: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): ObsLoggingRuleModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: ObsLoggingRuleModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<ObsLoggingRuleModel>): ObsLoggingRuleModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: ObsLoggingRuleModel = {
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
