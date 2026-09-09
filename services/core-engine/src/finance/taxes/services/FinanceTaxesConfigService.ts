import { FinanceTaxesConfigModel, FinanceTaxesConfigValidator } from "@nexora/types/domains/finance/taxes/FinanceTaxesConfig";

export class FinanceTaxesConfigService {
  private repository = new Map<string, FinanceTaxesConfigModel>();

  public create(data: Omit<FinanceTaxesConfigModel, "id" | "version" | "createdAt" | "updatedAt">): FinanceTaxesConfigModel {
    const id = "fina_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: FinanceTaxesConfigModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = FinanceTaxesConfigValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for FinanceTaxesConfig: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): FinanceTaxesConfigModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: FinanceTaxesConfigModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<FinanceTaxesConfigModel>): FinanceTaxesConfigModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: FinanceTaxesConfigModel = {
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
