import { DmsOcrSnapshotModel, DmsOcrSnapshotValidator } from "@nexora/types/domains/dms/ocr/DmsOcrSnapshot";

export class DmsOcrSnapshotService {
  private repository = new Map<string, DmsOcrSnapshotModel>();

  public create(data: Omit<DmsOcrSnapshotModel, "id" | "version" | "createdAt" | "updatedAt">): DmsOcrSnapshotModel {
    const id = "dms__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: DmsOcrSnapshotModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = DmsOcrSnapshotValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for DmsOcrSnapshot: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): DmsOcrSnapshotModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: DmsOcrSnapshotModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<DmsOcrSnapshotModel>): DmsOcrSnapshotModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: DmsOcrSnapshotModel = {
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
