import { ObsSpansSnapshotModel, ObsSpansSnapshotValidator } from "@nexora/types/domains/obs/spans/ObsSpansSnapshot";

export class ObsSpansSnapshotService {
  private repository = new Map<string, ObsSpansSnapshotModel>();

  public create(data: Omit<ObsSpansSnapshotModel, "id" | "version" | "createdAt" | "updatedAt">): ObsSpansSnapshotModel {
    const id = "obs__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: ObsSpansSnapshotModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = ObsSpansSnapshotValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for ObsSpansSnapshot: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): ObsSpansSnapshotModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: ObsSpansSnapshotModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<ObsSpansSnapshotModel>): ObsSpansSnapshotModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: ObsSpansSnapshotModel = {
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
