import { FinTaxRateData, FinTaxRateValidator } from "../../../../packages/types/src/domains/finance/FinTaxRate";

export class FinTaxRateService {
  private repository = new Map<string, FinTaxRateData>();

  public create(data: Omit<FinTaxRateData, "id" | "createdAt" | "updatedAt">): FinTaxRateData {
    const id = "fin_" + Math.random().toString(36).substring(2, 9);
    const now = new Date().toISOString();
    const item: FinTaxRateData = {
      ...data,
      id,
      createdAt: now,
      updatedAt: now
    };
    const validation = FinTaxRateValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for FinTaxRate: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): FinTaxRateData | undefined {
    return this.repository.get(id);
  }

  public listByTenant(tenantId: string): FinTaxRateData[] {
    return Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
  }

  public update(id: string, updates: Partial<FinTaxRateData>): FinTaxRateData | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: FinTaxRateData = { ...existing, ...updates, updatedAt: new Date().toISOString() };
    this.repository.set(id, updated);
    return updated;
  }

  public delete(id: string): boolean {
    return this.repository.delete(id);
  }
}
