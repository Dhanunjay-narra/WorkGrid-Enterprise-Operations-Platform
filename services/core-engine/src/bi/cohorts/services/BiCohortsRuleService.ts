import { BiCohortsRuleModel, BiCohortsRuleValidator } from "@nexora/types/domains/bi/cohorts/BiCohortsRule";

export class BiCohortsRuleService {
  private repository = new Map<string, BiCohortsRuleModel>();

  public create(data: Omit<BiCohortsRuleModel, "id" | "version" | "createdAt" | "updatedAt">): BiCohortsRuleModel {
    const id = "bi_c_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: BiCohortsRuleModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = BiCohortsRuleValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for BiCohortsRule: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): BiCohortsRuleModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: BiCohortsRuleModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<BiCohortsRuleModel>): BiCohortsRuleModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: BiCohortsRuleModel = {
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
