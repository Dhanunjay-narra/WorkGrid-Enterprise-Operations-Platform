import { ObsMetricsSnapshotModel, ObsMetricsSnapshotValidator } from "@nexora/types/domains/obs/metrics/ObsMetricsSnapshot";

export class ObsMetricsSnapshotService {
  private repository = new Map<string, ObsMetricsSnapshotModel>();

  public create(data: Omit<ObsMetricsSnapshotModel, "id" | "version" | "createdAt" | "updatedAt">): ObsMetricsSnapshotModel {
    const id = "obs__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: ObsMetricsSnapshotModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = ObsMetricsSnapshotValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for ObsMetricsSnapshot: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): ObsMetricsSnapshotModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: ObsMetricsSnapshotModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<ObsMetricsSnapshotModel>): ObsMetricsSnapshotModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: ObsMetricsSnapshotModel = {
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
