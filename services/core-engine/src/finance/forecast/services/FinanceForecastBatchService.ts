import { FinanceForecastBatchModel, FinanceForecastBatchValidator } from "@nexora/types/domains/finance/forecast/FinanceForecastBatch";

export class FinanceForecastBatchService {
  private repository = new Map<string, FinanceForecastBatchModel>();

  public create(data: Omit<FinanceForecastBatchModel, "id" | "version" | "createdAt" | "updatedAt">): FinanceForecastBatchModel {
    const id = "fina_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: FinanceForecastBatchModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = FinanceForecastBatchValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for FinanceForecastBatch: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): FinanceForecastBatchModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: FinanceForecastBatchModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<FinanceForecastBatchModel>): FinanceForecastBatchModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: FinanceForecastBatchModel = {
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
