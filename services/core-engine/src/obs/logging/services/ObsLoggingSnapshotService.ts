import { ObsLoggingSnapshotModel, ObsLoggingSnapshotValidator } from "@nexora/types/domains/obs/logging/ObsLoggingSnapshot";

export class ObsLoggingSnapshotService {
  private repository = new Map<string, ObsLoggingSnapshotModel>();

  public create(data: Omit<ObsLoggingSnapshotModel, "id" | "version" | "createdAt" | "updatedAt">): ObsLoggingSnapshotModel {
    const id = "obs__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: ObsLoggingSnapshotModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = ObsLoggingSnapshotValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for ObsLoggingSnapshot: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): ObsLoggingSnapshotModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: ObsLoggingSnapshotModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<ObsLoggingSnapshotModel>): ObsLoggingSnapshotModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: ObsLoggingSnapshotModel = {
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
