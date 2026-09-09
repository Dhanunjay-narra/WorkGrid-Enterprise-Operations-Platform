import { BiCohortMetricData, BiCohortMetricValidator } from "../../../../packages/types/src/domains/analytics/BiCohortMetric";

export class BiCohortMetricService {
  private repository = new Map<string, BiCohortMetricData>();

  public create(data: Omit<BiCohortMetricData, "id" | "createdAt" | "updatedAt">): BiCohortMetricData {
    const id = "ana_" + Math.random().toString(36).substring(2, 9);
    const now = new Date().toISOString();
    const item: BiCohortMetricData = {
      ...data,
      id,
      createdAt: now,
      updatedAt: now
    };
    const validation = BiCohortMetricValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for BiCohortMetric: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): BiCohortMetricData | undefined {
    return this.repository.get(id);
  }

  public listByTenant(tenantId: string): BiCohortMetricData[] {
    return Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
  }

  public update(id: string, updates: Partial<BiCohortMetricData>): BiCohortMetricData | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: BiCohortMetricData = { ...existing, ...updates, updatedAt: new Date().toISOString() };
    this.repository.set(id, updated);
    return updated;
  }

  public delete(id: string): boolean {
    return this.repository.delete(id);
  }
}
