import { AbacRuleModel, AbacRuleValidator } from "@nexora/types/domains/abac/AbacRule";

export class AbacRuleService {
  private repository = new Map<string, AbacRuleModel>();

  public create(data: Omit<AbacRuleModel, "id" | "version" | "createdAt" | "updatedAt">): AbacRuleModel {
    const id = "abac_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: AbacRuleModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = AbacRuleValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for AbacRule: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): AbacRuleModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: AbacRuleModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<AbacRuleModel>): AbacRuleModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: AbacRuleModel = {
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
