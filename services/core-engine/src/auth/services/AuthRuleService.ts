import { AuthRuleModel, AuthRuleValidator } from "@nexora/types/domains/auth/AuthRule";

export class AuthRuleService {
  private repository = new Map<string, AuthRuleModel>();

  public create(data: Omit<AuthRuleModel, "id" | "version" | "createdAt" | "updatedAt">): AuthRuleModel {
    const id = "auth_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: AuthRuleModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = AuthRuleValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for AuthRule: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): AuthRuleModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: AuthRuleModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<AuthRuleModel>): AuthRuleModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: AuthRuleModel = {
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
