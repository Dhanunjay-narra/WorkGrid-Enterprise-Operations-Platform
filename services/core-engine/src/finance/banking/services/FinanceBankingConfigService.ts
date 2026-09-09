import { FinanceBankingConfigModel, FinanceBankingConfigValidator } from "@nexora/types/domains/finance/banking/FinanceBankingConfig";

export class FinanceBankingConfigService {
  private repository = new Map<string, FinanceBankingConfigModel>();

  public create(data: Omit<FinanceBankingConfigModel, "id" | "version" | "createdAt" | "updatedAt">): FinanceBankingConfigModel {
    const id = "fina_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: FinanceBankingConfigModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = FinanceBankingConfigValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for FinanceBankingConfig: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): FinanceBankingConfigModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: FinanceBankingConfigModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<FinanceBankingConfigModel>): FinanceBankingConfigModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: FinanceBankingConfigModel = {
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
