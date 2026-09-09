import { IntSalesforceRuleModel, IntSalesforceRuleValidator } from "@nexora/types/domains/int/salesforce/IntSalesforceRule";

export class IntSalesforceRuleService {
  private repository = new Map<string, IntSalesforceRuleModel>();

  public create(data: Omit<IntSalesforceRuleModel, "id" | "version" | "createdAt" | "updatedAt">): IntSalesforceRuleModel {
    const id = "int__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: IntSalesforceRuleModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = IntSalesforceRuleValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for IntSalesforceRule: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): IntSalesforceRuleModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: IntSalesforceRuleModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<IntSalesforceRuleModel>): IntSalesforceRuleModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: IntSalesforceRuleModel = {
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
