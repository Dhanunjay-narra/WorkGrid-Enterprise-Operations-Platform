import { ObsMetricsSummaryModel, ObsMetricsSummaryValidator } from "@nexora/types/domains/obs/metrics/ObsMetricsSummary";

export class ObsMetricsSummaryService {
  private repository = new Map<string, ObsMetricsSummaryModel>();

  public create(data: Omit<ObsMetricsSummaryModel, "id" | "version" | "createdAt" | "updatedAt">): ObsMetricsSummaryModel {
    const id = "obs__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: ObsMetricsSummaryModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = ObsMetricsSummaryValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for ObsMetricsSummary: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): ObsMetricsSummaryModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: ObsMetricsSummaryModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<ObsMetricsSummaryModel>): ObsMetricsSummaryModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: ObsMetricsSummaryModel = {
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
