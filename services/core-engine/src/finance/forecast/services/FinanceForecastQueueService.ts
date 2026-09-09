import { FinanceForecastQueueModel, FinanceForecastQueueValidator } from "@nexora/types/domains/finance/forecast/FinanceForecastQueue";

export class FinanceForecastQueueService {
  private repository = new Map<string, FinanceForecastQueueModel>();

  public create(data: Omit<FinanceForecastQueueModel, "id" | "version" | "createdAt" | "updatedAt">): FinanceForecastQueueModel {
    const id = "fina_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: FinanceForecastQueueModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = FinanceForecastQueueValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for FinanceForecastQueue: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): FinanceForecastQueueModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: FinanceForecastQueueModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<FinanceForecastQueueModel>): FinanceForecastQueueModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: FinanceForecastQueueModel = {
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
