import { IntOauthRuleModel, IntOauthRuleValidator } from "@nexora/types/domains/int/oauth/IntOauthRule";

export class IntOauthRuleService {
  private repository = new Map<string, IntOauthRuleModel>();

  public create(data: Omit<IntOauthRuleModel, "id" | "version" | "createdAt" | "updatedAt">): IntOauthRuleModel {
    const id = "int__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: IntOauthRuleModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = IntOauthRuleValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for IntOauthRule: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): IntOauthRuleModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: IntOauthRuleModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<IntOauthRuleModel>): IntOauthRuleModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: IntOauthRuleModel = {
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
