import { ObsMetricsConfigModel, ObsMetricsConfigValidator } from "@nexora/types/domains/obs/metrics/ObsMetricsConfig";

export class ObsMetricsConfigService {
  private repository = new Map<string, ObsMetricsConfigModel>();

  public create(data: Omit<ObsMetricsConfigModel, "id" | "version" | "createdAt" | "updatedAt">): ObsMetricsConfigModel {
    const id = "obs__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: ObsMetricsConfigModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = ObsMetricsConfigValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for ObsMetricsConfig: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): ObsMetricsConfigModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: ObsMetricsConfigModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<ObsMetricsConfigModel>): ObsMetricsConfigModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: ObsMetricsConfigModel = {
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
