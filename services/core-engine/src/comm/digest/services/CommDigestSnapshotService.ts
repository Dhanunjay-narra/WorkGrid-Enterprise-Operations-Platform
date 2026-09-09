import { CommDigestSnapshotModel, CommDigestSnapshotValidator } from "@nexora/types/domains/comm/digest/CommDigestSnapshot";

export class CommDigestSnapshotService {
  private repository = new Map<string, CommDigestSnapshotModel>();

  public create(data: Omit<CommDigestSnapshotModel, "id" | "version" | "createdAt" | "updatedAt">): CommDigestSnapshotModel {
    const id = "comm_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: CommDigestSnapshotModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = CommDigestSnapshotValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for CommDigestSnapshot: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): CommDigestSnapshotModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: CommDigestSnapshotModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<CommDigestSnapshotModel>): CommDigestSnapshotModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: CommDigestSnapshotModel = {
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
