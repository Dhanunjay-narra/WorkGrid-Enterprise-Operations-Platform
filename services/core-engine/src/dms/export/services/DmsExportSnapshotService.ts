import { DmsExportSnapshotModel, DmsExportSnapshotValidator } from "@nexora/types/domains/dms/export/DmsExportSnapshot";

export class DmsExportSnapshotService {
  private repository = new Map<string, DmsExportSnapshotModel>();

  public create(data: Omit<DmsExportSnapshotModel, "id" | "version" | "createdAt" | "updatedAt">): DmsExportSnapshotModel {
    const id = "dms__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: DmsExportSnapshotModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = DmsExportSnapshotValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for DmsExportSnapshot: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): DmsExportSnapshotModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: DmsExportSnapshotModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<DmsExportSnapshotModel>): DmsExportSnapshotModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: DmsExportSnapshotModel = {
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
