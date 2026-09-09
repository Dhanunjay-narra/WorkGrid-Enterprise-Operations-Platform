import { BiKpiMetricData, BiKpiMetricValidator } from "../../../../packages/types/src/domains/analytics/BiKpiMetric";

export class BiKpiMetricService {
  private repository = new Map<string, BiKpiMetricData>();

  public create(data: Omit<BiKpiMetricData, "id" | "createdAt" | "updatedAt">): BiKpiMetricData {
    const id = "ana_" + Math.random().toString(36).substring(2, 9);
    const now = new Date().toISOString();
    const item: BiKpiMetricData = {
      ...data,
      id,
      createdAt: now,
      updatedAt: now
    };
    const validation = BiKpiMetricValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for BiKpiMetric: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): BiKpiMetricData | undefined {
    return this.repository.get(id);
  }

  public listByTenant(tenantId: string): BiKpiMetricData[] {
    return Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
  }

  public update(id: string, updates: Partial<BiKpiMetricData>): BiKpiMetricData | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: BiKpiMetricData = { ...existing, ...updates, updatedAt: new Date().toISOString() };
    this.repository.set(id, updated);
    return updated;
  }

  public delete(id: string): boolean {
    return this.repository.delete(id);
  }
}
