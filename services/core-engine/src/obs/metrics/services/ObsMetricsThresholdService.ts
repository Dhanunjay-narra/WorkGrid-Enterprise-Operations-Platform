import { ObsMetricsThresholdModel, ObsMetricsThresholdValidator } from "@nexora/types/domains/obs/metrics/ObsMetricsThreshold";

export class ObsMetricsThresholdService {
  private repository = new Map<string, ObsMetricsThresholdModel>();

  public create(data: Omit<ObsMetricsThresholdModel, "id" | "version" | "createdAt" | "updatedAt">): ObsMetricsThresholdModel {
    const id = "obs__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: ObsMetricsThresholdModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = ObsMetricsThresholdValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for ObsMetricsThreshold: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): ObsMetricsThresholdModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: ObsMetricsThresholdModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<ObsMetricsThresholdModel>): ObsMetricsThresholdModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: ObsMetricsThresholdModel = {
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
