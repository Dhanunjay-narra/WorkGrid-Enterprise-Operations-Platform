import { DmsFilesSnapshotModel, DmsFilesSnapshotValidator } from "@nexora/types/domains/dms/files/DmsFilesSnapshot";

export class DmsFilesSnapshotService {
  private repository = new Map<string, DmsFilesSnapshotModel>();

  public create(data: Omit<DmsFilesSnapshotModel, "id" | "version" | "createdAt" | "updatedAt">): DmsFilesSnapshotModel {
    const id = "dms__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: DmsFilesSnapshotModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = DmsFilesSnapshotValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for DmsFilesSnapshot: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): DmsFilesSnapshotModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: DmsFilesSnapshotModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<DmsFilesSnapshotModel>): DmsFilesSnapshotModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: DmsFilesSnapshotModel = {
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
