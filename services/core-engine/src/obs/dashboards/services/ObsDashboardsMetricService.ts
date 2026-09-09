import { ObsDashboardsMetricModel, ObsDashboardsMetricValidator } from "@nexora/types/domains/obs/dashboards/ObsDashboardsMetric";

export class ObsDashboardsMetricService {
  private repository = new Map<string, ObsDashboardsMetricModel>();

  public create(data: Omit<ObsDashboardsMetricModel, "id" | "version" | "createdAt" | "updatedAt">): ObsDashboardsMetricModel {
    const id = "obs__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: ObsDashboardsMetricModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = ObsDashboardsMetricValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for ObsDashboardsMetric: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): ObsDashboardsMetricModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: ObsDashboardsMetricModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<ObsDashboardsMetricModel>): ObsDashboardsMetricModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: ObsDashboardsMetricModel = {
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
