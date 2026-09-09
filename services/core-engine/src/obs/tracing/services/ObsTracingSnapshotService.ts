import { ObsTracingSnapshotModel, ObsTracingSnapshotValidator } from "@nexora/types/domains/obs/tracing/ObsTracingSnapshot";

export class ObsTracingSnapshotService {
  private repository = new Map<string, ObsTracingSnapshotModel>();

  public create(data: Omit<ObsTracingSnapshotModel, "id" | "version" | "createdAt" | "updatedAt">): ObsTracingSnapshotModel {
    const id = "obs__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: ObsTracingSnapshotModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = ObsTracingSnapshotValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for ObsTracingSnapshot: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): ObsTracingSnapshotModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: ObsTracingSnapshotModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<ObsTracingSnapshotModel>): ObsTracingSnapshotModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: ObsTracingSnapshotModel = {
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
