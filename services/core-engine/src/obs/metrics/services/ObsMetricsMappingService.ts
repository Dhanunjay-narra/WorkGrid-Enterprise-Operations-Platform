import { ObsMetricsMappingModel, ObsMetricsMappingValidator } from "@nexora/types/domains/obs/metrics/ObsMetricsMapping";

export class ObsMetricsMappingService {
  private repository = new Map<string, ObsMetricsMappingModel>();

  public create(data: Omit<ObsMetricsMappingModel, "id" | "version" | "createdAt" | "updatedAt">): ObsMetricsMappingModel {
    const id = "obs__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: ObsMetricsMappingModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = ObsMetricsMappingValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for ObsMetricsMapping: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): ObsMetricsMappingModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: ObsMetricsMappingModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<ObsMetricsMappingModel>): ObsMetricsMappingModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: ObsMetricsMappingModel = {
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
