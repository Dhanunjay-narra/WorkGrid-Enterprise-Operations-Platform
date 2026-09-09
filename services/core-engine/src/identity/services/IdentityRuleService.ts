import { IdentityRuleModel, IdentityRuleValidator } from "@nexora/types/domains/identity/IdentityRule";

export class IdentityRuleService {
  private repository = new Map<string, IdentityRuleModel>();

  public create(data: Omit<IdentityRuleModel, "id" | "version" | "createdAt" | "updatedAt">): IdentityRuleModel {
    const id = "iden_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: IdentityRuleModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = IdentityRuleValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for IdentityRule: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): IdentityRuleModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: IdentityRuleModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<IdentityRuleModel>): IdentityRuleModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: IdentityRuleModel = {
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
