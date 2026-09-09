import { ObsProbesMetricModel, ObsProbesMetricValidator } from "@nexora/types/domains/obs/probes/ObsProbesMetric";

export class ObsProbesMetricService {
  private repository = new Map<string, ObsProbesMetricModel>();

  public create(data: Omit<ObsProbesMetricModel, "id" | "version" | "createdAt" | "updatedAt">): ObsProbesMetricModel {
    const id = "obs__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: ObsProbesMetricModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = ObsProbesMetricValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for ObsProbesMetric: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): ObsProbesMetricModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: ObsProbesMetricModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<ObsProbesMetricModel>): ObsProbesMetricModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: ObsProbesMetricModel = {
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
