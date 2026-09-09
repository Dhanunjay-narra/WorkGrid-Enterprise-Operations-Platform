import { DmsChunksSnapshotModel, DmsChunksSnapshotValidator } from "@nexora/types/domains/dms/chunks/DmsChunksSnapshot";

export class DmsChunksSnapshotService {
  private repository = new Map<string, DmsChunksSnapshotModel>();

  public create(data: Omit<DmsChunksSnapshotModel, "id" | "version" | "createdAt" | "updatedAt">): DmsChunksSnapshotModel {
    const id = "dms__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: DmsChunksSnapshotModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = DmsChunksSnapshotValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for DmsChunksSnapshot: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): DmsChunksSnapshotModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: DmsChunksSnapshotModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<DmsChunksSnapshotModel>): DmsChunksSnapshotModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: DmsChunksSnapshotModel = {
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
