import { BiAggregatedDailyMetricData, BiAggregatedDailyMetricValidator } from "../../../../packages/types/src/domains/analytics/BiAggregatedDailyMetric";

export class BiAggregatedDailyMetricService {
  private repository = new Map<string, BiAggregatedDailyMetricData>();

  public create(data: Omit<BiAggregatedDailyMetricData, "id" | "createdAt" | "updatedAt">): BiAggregatedDailyMetricData {
    const id = "ana_" + Math.random().toString(36).substring(2, 9);
    const now = new Date().toISOString();
    const item: BiAggregatedDailyMetricData = {
      ...data,
      id,
      createdAt: now,
      updatedAt: now
    };
    const validation = BiAggregatedDailyMetricValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for BiAggregatedDailyMetric: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): BiAggregatedDailyMetricData | undefined {
    return this.repository.get(id);
  }

  public listByTenant(tenantId: string): BiAggregatedDailyMetricData[] {
    return Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
  }

  public update(id: string, updates: Partial<BiAggregatedDailyMetricData>): BiAggregatedDailyMetricData | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: BiAggregatedDailyMetricData = { ...existing, ...updates, updatedAt: new Date().toISOString() };
    this.repository.set(id, updated);
    return updated;
  }

  public delete(id: string): boolean {
    return this.repository.delete(id);
  }
}
