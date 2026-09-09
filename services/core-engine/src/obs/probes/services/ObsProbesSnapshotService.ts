import { ObsProbesSnapshotModel, ObsProbesSnapshotValidator } from "@nexora/types/domains/obs/probes/ObsProbesSnapshot";

export class ObsProbesSnapshotService {
  private repository = new Map<string, ObsProbesSnapshotModel>();

  public create(data: Omit<ObsProbesSnapshotModel, "id" | "version" | "createdAt" | "updatedAt">): ObsProbesSnapshotModel {
    const id = "obs__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: ObsProbesSnapshotModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = ObsProbesSnapshotValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for ObsProbesSnapshot: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): ObsProbesSnapshotModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: ObsProbesSnapshotModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<ObsProbesSnapshotModel>): ObsProbesSnapshotModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: ObsProbesSnapshotModel = {
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
