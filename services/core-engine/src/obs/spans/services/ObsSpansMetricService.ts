import { ObsSpansMetricModel, ObsSpansMetricValidator } from "@nexora/types/domains/obs/spans/ObsSpansMetric";

export class ObsSpansMetricService {
  private repository = new Map<string, ObsSpansMetricModel>();

  public create(data: Omit<ObsSpansMetricModel, "id" | "version" | "createdAt" | "updatedAt">): ObsSpansMetricModel {
    const id = "obs__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: ObsSpansMetricModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = ObsSpansMetricValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for ObsSpansMetric: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): ObsSpansMetricModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: ObsSpansMetricModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<ObsSpansMetricModel>): ObsSpansMetricModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: ObsSpansMetricModel = {
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
