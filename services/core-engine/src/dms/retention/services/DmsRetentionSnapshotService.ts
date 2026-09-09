import { DmsRetentionSnapshotModel, DmsRetentionSnapshotValidator } from "@nexora/types/domains/dms/retention/DmsRetentionSnapshot";

export class DmsRetentionSnapshotService {
  private repository = new Map<string, DmsRetentionSnapshotModel>();

  public create(data: Omit<DmsRetentionSnapshotModel, "id" | "version" | "createdAt" | "updatedAt">): DmsRetentionSnapshotModel {
    const id = "dms__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: DmsRetentionSnapshotModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = DmsRetentionSnapshotValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for DmsRetentionSnapshot: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): DmsRetentionSnapshotModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: DmsRetentionSnapshotModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<DmsRetentionSnapshotModel>): DmsRetentionSnapshotModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: DmsRetentionSnapshotModel = {
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
