import { FinanceTreasuryConfigModel, FinanceTreasuryConfigValidator } from "@nexora/types/domains/finance/treasury/FinanceTreasuryConfig";

export class FinanceTreasuryConfigService {
  private repository = new Map<string, FinanceTreasuryConfigModel>();

  public create(data: Omit<FinanceTreasuryConfigModel, "id" | "version" | "createdAt" | "updatedAt">): FinanceTreasuryConfigModel {
    const id = "fina_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: FinanceTreasuryConfigModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = FinanceTreasuryConfigValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for FinanceTreasuryConfig: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): FinanceTreasuryConfigModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: FinanceTreasuryConfigModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<FinanceTreasuryConfigModel>): FinanceTreasuryConfigModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: FinanceTreasuryConfigModel = {
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
