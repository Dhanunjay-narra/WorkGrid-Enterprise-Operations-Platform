import { SecurityRuleModel, SecurityRuleValidator } from "@nexora/types/domains/security/SecurityRule";

export class SecurityRuleService {
  private repository = new Map<string, SecurityRuleModel>();

  public create(data: Omit<SecurityRuleModel, "id" | "version" | "createdAt" | "updatedAt">): SecurityRuleModel {
    const id = "secu_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: SecurityRuleModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = SecurityRuleValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for SecurityRule: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): SecurityRuleModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: SecurityRuleModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<SecurityRuleModel>): SecurityRuleModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: SecurityRuleModel = {
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
