import { ObsMetricsItemModel, ObsMetricsItemValidator } from "@nexora/types/domains/obs/metrics/ObsMetricsItem";

export class ObsMetricsItemService {
  private repository = new Map<string, ObsMetricsItemModel>();

  public create(data: Omit<ObsMetricsItemModel, "id" | "version" | "createdAt" | "updatedAt">): ObsMetricsItemModel {
    const id = "obs__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: ObsMetricsItemModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = ObsMetricsItemValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for ObsMetricsItem: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): ObsMetricsItemModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: ObsMetricsItemModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<ObsMetricsItemModel>): ObsMetricsItemModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: ObsMetricsItemModel = {
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
