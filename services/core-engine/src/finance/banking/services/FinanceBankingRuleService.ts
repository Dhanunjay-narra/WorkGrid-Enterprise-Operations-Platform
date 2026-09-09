import { FinanceBankingRuleModel, FinanceBankingRuleValidator } from "@nexora/types/domains/finance/banking/FinanceBankingRule";

export class FinanceBankingRuleService {
  private repository = new Map<string, FinanceBankingRuleModel>();

  public create(data: Omit<FinanceBankingRuleModel, "id" | "version" | "createdAt" | "updatedAt">): FinanceBankingRuleModel {
    const id = "fina_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: FinanceBankingRuleModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = FinanceBankingRuleValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for FinanceBankingRule: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): FinanceBankingRuleModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: FinanceBankingRuleModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<FinanceBankingRuleModel>): FinanceBankingRuleModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: FinanceBankingRuleModel = {
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
