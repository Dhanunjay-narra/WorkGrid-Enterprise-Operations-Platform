import { ObsMetricsStateModel, ObsMetricsStateValidator } from "@nexora/types/domains/obs/metrics/ObsMetricsState";

export class ObsMetricsStateService {
  private repository = new Map<string, ObsMetricsStateModel>();

  public create(data: Omit<ObsMetricsStateModel, "id" | "version" | "createdAt" | "updatedAt">): ObsMetricsStateModel {
    const id = "obs__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: ObsMetricsStateModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = ObsMetricsStateValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for ObsMetricsState: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): ObsMetricsStateModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: ObsMetricsStateModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<ObsMetricsStateModel>): ObsMetricsStateModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: ObsMetricsStateModel = {
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
