import { SecPiiMaskingRuleData, SecPiiMaskingRuleValidator } from "../../../../packages/types/src/domains/security/SecPiiMaskingRule";

export class SecPiiMaskingRuleService {
  private repository = new Map<string, SecPiiMaskingRuleData>();

  public create(data: Omit<SecPiiMaskingRuleData, "id" | "createdAt" | "updatedAt">): SecPiiMaskingRuleData {
    const id = "sec_" + Math.random().toString(36).substring(2, 9);
    const now = new Date().toISOString();
    const item: SecPiiMaskingRuleData = {
      ...data,
      id,
      createdAt: now,
      updatedAt: now
    };
    const validation = SecPiiMaskingRuleValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for SecPiiMaskingRule: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): SecPiiMaskingRuleData | undefined {
    return this.repository.get(id);
  }

  public listByTenant(tenantId: string): SecPiiMaskingRuleData[] {
    return Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
  }

  public update(id: string, updates: Partial<SecPiiMaskingRuleData>): SecPiiMaskingRuleData | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: SecPiiMaskingRuleData = { ...existing, ...updates, updatedAt: new Date().toISOString() };
    this.repository.set(id, updated);
    return updated;
  }

  public delete(id: string): boolean {
    return this.repository.delete(id);
  }
}
