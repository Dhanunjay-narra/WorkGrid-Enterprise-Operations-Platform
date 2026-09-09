import { ObsProfilingSnapshotModel, ObsProfilingSnapshotValidator } from "@nexora/types/domains/obs/profiling/ObsProfilingSnapshot";

export class ObsProfilingSnapshotService {
  private repository = new Map<string, ObsProfilingSnapshotModel>();

  public create(data: Omit<ObsProfilingSnapshotModel, "id" | "version" | "createdAt" | "updatedAt">): ObsProfilingSnapshotModel {
    const id = "obs__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: ObsProfilingSnapshotModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = ObsProfilingSnapshotValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for ObsProfilingSnapshot: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): ObsProfilingSnapshotModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: ObsProfilingSnapshotModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<ObsProfilingSnapshotModel>): ObsProfilingSnapshotModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: ObsProfilingSnapshotModel = {
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
