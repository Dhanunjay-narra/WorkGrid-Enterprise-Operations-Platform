import { FinanceForecastTransactionModel, FinanceForecastTransactionValidator } from "@nexora/types/domains/finance/forecast/FinanceForecastTransaction";

export class FinanceForecastTransactionService {
  private repository = new Map<string, FinanceForecastTransactionModel>();

  public create(data: Omit<FinanceForecastTransactionModel, "id" | "version" | "createdAt" | "updatedAt">): FinanceForecastTransactionModel {
    const id = "fina_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: FinanceForecastTransactionModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = FinanceForecastTransactionValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for FinanceForecastTransaction: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): FinanceForecastTransactionModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: FinanceForecastTransactionModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<FinanceForecastTransactionModel>): FinanceForecastTransactionModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: FinanceForecastTransactionModel = {
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
