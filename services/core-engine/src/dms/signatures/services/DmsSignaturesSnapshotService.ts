import { DmsSignaturesSnapshotModel, DmsSignaturesSnapshotValidator } from "@nexora/types/domains/dms/signatures/DmsSignaturesSnapshot";

export class DmsSignaturesSnapshotService {
  private repository = new Map<string, DmsSignaturesSnapshotModel>();

  public create(data: Omit<DmsSignaturesSnapshotModel, "id" | "version" | "createdAt" | "updatedAt">): DmsSignaturesSnapshotModel {
    const id = "dms__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: DmsSignaturesSnapshotModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = DmsSignaturesSnapshotValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for DmsSignaturesSnapshot: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): DmsSignaturesSnapshotModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: DmsSignaturesSnapshotModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<DmsSignaturesSnapshotModel>): DmsSignaturesSnapshotModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: DmsSignaturesSnapshotModel = {
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
