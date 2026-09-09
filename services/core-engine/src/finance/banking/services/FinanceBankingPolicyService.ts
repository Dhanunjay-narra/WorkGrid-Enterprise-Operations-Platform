import { FinanceBankingPolicyModel, FinanceBankingPolicyValidator } from "@nexora/types/domains/finance/banking/FinanceBankingPolicy";

export class FinanceBankingPolicyService {
  private repository = new Map<string, FinanceBankingPolicyModel>();

  public create(data: Omit<FinanceBankingPolicyModel, "id" | "version" | "createdAt" | "updatedAt">): FinanceBankingPolicyModel {
    const id = "fina_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: FinanceBankingPolicyModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = FinanceBankingPolicyValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for FinanceBankingPolicy: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): FinanceBankingPolicyModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: FinanceBankingPolicyModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<FinanceBankingPolicyModel>): FinanceBankingPolicyModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: FinanceBankingPolicyModel = {
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
