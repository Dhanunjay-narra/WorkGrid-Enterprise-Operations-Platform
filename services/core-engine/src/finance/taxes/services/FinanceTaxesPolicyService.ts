import { FinanceTaxesPolicyModel, FinanceTaxesPolicyValidator } from "@nexora/types/domains/finance/taxes/FinanceTaxesPolicy";

export class FinanceTaxesPolicyService {
  private repository = new Map<string, FinanceTaxesPolicyModel>();

  public create(data: Omit<FinanceTaxesPolicyModel, "id" | "version" | "createdAt" | "updatedAt">): FinanceTaxesPolicyModel {
    const id = "fina_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: FinanceTaxesPolicyModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = FinanceTaxesPolicyValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for FinanceTaxesPolicy: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): FinanceTaxesPolicyModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: FinanceTaxesPolicyModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<FinanceTaxesPolicyModel>): FinanceTaxesPolicyModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: FinanceTaxesPolicyModel = {
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
