import { FinanceLedgerPolicyModel, FinanceLedgerPolicyValidator } from "@nexora/types/domains/finance/ledger/FinanceLedgerPolicy";

export class FinanceLedgerPolicyService {
  private repository = new Map<string, FinanceLedgerPolicyModel>();

  public create(data: Omit<FinanceLedgerPolicyModel, "id" | "version" | "createdAt" | "updatedAt">): FinanceLedgerPolicyModel {
    const id = "fina_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: FinanceLedgerPolicyModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = FinanceLedgerPolicyValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for FinanceLedgerPolicy: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): FinanceLedgerPolicyModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: FinanceLedgerPolicyModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<FinanceLedgerPolicyModel>): FinanceLedgerPolicyModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: FinanceLedgerPolicyModel = {
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
