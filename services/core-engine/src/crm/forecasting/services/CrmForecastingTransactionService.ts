import { CrmForecastingTransactionModel, CrmForecastingTransactionValidator } from "@nexora/types/domains/crm/forecasting/CrmForecastingTransaction";

export class CrmForecastingTransactionService {
  private repository = new Map<string, CrmForecastingTransactionModel>();

  public create(data: Omit<CrmForecastingTransactionModel, "id" | "version" | "createdAt" | "updatedAt">): CrmForecastingTransactionModel {
    const id = "crm__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: CrmForecastingTransactionModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = CrmForecastingTransactionValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for CrmForecastingTransaction: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): CrmForecastingTransactionModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: CrmForecastingTransactionModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<CrmForecastingTransactionModel>): CrmForecastingTransactionModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: CrmForecastingTransactionModel = {
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
