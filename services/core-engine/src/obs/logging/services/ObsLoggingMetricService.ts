import { ObsLoggingMetricModel, ObsLoggingMetricValidator } from "@nexora/types/domains/obs/logging/ObsLoggingMetric";

export class ObsLoggingMetricService {
  private repository = new Map<string, ObsLoggingMetricModel>();

  public create(data: Omit<ObsLoggingMetricModel, "id" | "version" | "createdAt" | "updatedAt">): ObsLoggingMetricModel {
    const id = "obs__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: ObsLoggingMetricModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = ObsLoggingMetricValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for ObsLoggingMetric: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): ObsLoggingMetricModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: ObsLoggingMetricModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<ObsLoggingMetricModel>): ObsLoggingMetricModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: ObsLoggingMetricModel = {
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
