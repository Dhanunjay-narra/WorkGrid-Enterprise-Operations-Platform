import { FinanceBankingMetricModel, FinanceBankingMetricValidator } from "@nexora/types/domains/finance/banking/FinanceBankingMetric";

export class FinanceBankingMetricService {
  private repository = new Map<string, FinanceBankingMetricModel>();

  public create(data: Omit<FinanceBankingMetricModel, "id" | "version" | "createdAt" | "updatedAt">): FinanceBankingMetricModel {
    const id = "fina_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: FinanceBankingMetricModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = FinanceBankingMetricValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for FinanceBankingMetric: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): FinanceBankingMetricModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: FinanceBankingMetricModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<FinanceBankingMetricModel>): FinanceBankingMetricModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: FinanceBankingMetricModel = {
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
