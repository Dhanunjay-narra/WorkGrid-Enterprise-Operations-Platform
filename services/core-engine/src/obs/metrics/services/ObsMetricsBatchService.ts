import { ObsMetricsBatchModel, ObsMetricsBatchValidator } from "@nexora/types/domains/obs/metrics/ObsMetricsBatch";

export class ObsMetricsBatchService {
  private repository = new Map<string, ObsMetricsBatchModel>();

  public create(data: Omit<ObsMetricsBatchModel, "id" | "version" | "createdAt" | "updatedAt">): ObsMetricsBatchModel {
    const id = "obs__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: ObsMetricsBatchModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = ObsMetricsBatchValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for ObsMetricsBatch: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): ObsMetricsBatchModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: ObsMetricsBatchModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<ObsMetricsBatchModel>): ObsMetricsBatchModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: ObsMetricsBatchModel = {
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
