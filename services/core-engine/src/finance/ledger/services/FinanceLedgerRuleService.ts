import { FinanceLedgerRuleModel, FinanceLedgerRuleValidator } from "@nexora/types/domains/finance/ledger/FinanceLedgerRule";

export class FinanceLedgerRuleService {
  private repository = new Map<string, FinanceLedgerRuleModel>();

  public create(data: Omit<FinanceLedgerRuleModel, "id" | "version" | "createdAt" | "updatedAt">): FinanceLedgerRuleModel {
    const id = "fina_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: FinanceLedgerRuleModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = FinanceLedgerRuleValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for FinanceLedgerRule: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): FinanceLedgerRuleModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: FinanceLedgerRuleModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<FinanceLedgerRuleModel>): FinanceLedgerRuleModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: FinanceLedgerRuleModel = {
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
