import { FinanceBillsMetricModel, FinanceBillsMetricValidator } from "@nexora/types/domains/finance/bills/FinanceBillsMetric";

export class FinanceBillsMetricService {
  private repository = new Map<string, FinanceBillsMetricModel>();

  public create(data: Omit<FinanceBillsMetricModel, "id" | "version" | "createdAt" | "updatedAt">): FinanceBillsMetricModel {
    const id = "fina_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: FinanceBillsMetricModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = FinanceBillsMetricValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for FinanceBillsMetric: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): FinanceBillsMetricModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: FinanceBillsMetricModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<FinanceBillsMetricModel>): FinanceBillsMetricModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: FinanceBillsMetricModel = {
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
