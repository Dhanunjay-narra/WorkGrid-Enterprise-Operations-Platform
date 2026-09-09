import { FinanceBillsRuleModel, FinanceBillsRuleValidator } from "@nexora/types/domains/finance/bills/FinanceBillsRule";

export class FinanceBillsRuleService {
  private repository = new Map<string, FinanceBillsRuleModel>();

  public create(data: Omit<FinanceBillsRuleModel, "id" | "version" | "createdAt" | "updatedAt">): FinanceBillsRuleModel {
    const id = "fina_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: FinanceBillsRuleModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = FinanceBillsRuleValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for FinanceBillsRule: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): FinanceBillsRuleModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: FinanceBillsRuleModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<FinanceBillsRuleModel>): FinanceBillsRuleModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: FinanceBillsRuleModel = {
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
