import { ObsProfilingMetricModel, ObsProfilingMetricValidator } from "@nexora/types/domains/obs/profiling/ObsProfilingMetric";

export class ObsProfilingMetricService {
  private repository = new Map<string, ObsProfilingMetricModel>();

  public create(data: Omit<ObsProfilingMetricModel, "id" | "version" | "createdAt" | "updatedAt">): ObsProfilingMetricModel {
    const id = "obs__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: ObsProfilingMetricModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = ObsProfilingMetricValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for ObsProfilingMetric: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): ObsProfilingMetricModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: ObsProfilingMetricModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<ObsProfilingMetricModel>): ObsProfilingMetricModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: ObsProfilingMetricModel = {
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
