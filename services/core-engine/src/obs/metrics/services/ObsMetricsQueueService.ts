import { ObsMetricsQueueModel, ObsMetricsQueueValidator } from "@nexora/types/domains/obs/metrics/ObsMetricsQueue";

export class ObsMetricsQueueService {
  private repository = new Map<string, ObsMetricsQueueModel>();

  public create(data: Omit<ObsMetricsQueueModel, "id" | "version" | "createdAt" | "updatedAt">): ObsMetricsQueueModel {
    const id = "obs__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: ObsMetricsQueueModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = ObsMetricsQueueValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for ObsMetricsQueue: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): ObsMetricsQueueModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: ObsMetricsQueueModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<ObsMetricsQueueModel>): ObsMetricsQueueModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: ObsMetricsQueueModel = {
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
