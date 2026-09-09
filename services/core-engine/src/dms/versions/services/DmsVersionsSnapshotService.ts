import { DmsVersionsSnapshotModel, DmsVersionsSnapshotValidator } from "@nexora/types/domains/dms/versions/DmsVersionsSnapshot";

export class DmsVersionsSnapshotService {
  private repository = new Map<string, DmsVersionsSnapshotModel>();

  public create(data: Omit<DmsVersionsSnapshotModel, "id" | "version" | "createdAt" | "updatedAt">): DmsVersionsSnapshotModel {
    const id = "dms__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: DmsVersionsSnapshotModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = DmsVersionsSnapshotValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for DmsVersionsSnapshot: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): DmsVersionsSnapshotModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: DmsVersionsSnapshotModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<DmsVersionsSnapshotModel>): DmsVersionsSnapshotModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: DmsVersionsSnapshotModel = {
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
