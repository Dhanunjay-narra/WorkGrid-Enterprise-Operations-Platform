import { CommCallsSnapshotModel, CommCallsSnapshotValidator } from "@nexora/types/domains/comm/calls/CommCallsSnapshot";

export class CommCallsSnapshotService {
  private repository = new Map<string, CommCallsSnapshotModel>();

  public create(data: Omit<CommCallsSnapshotModel, "id" | "version" | "createdAt" | "updatedAt">): CommCallsSnapshotModel {
    const id = "comm_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: CommCallsSnapshotModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = CommCallsSnapshotValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for CommCallsSnapshot: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): CommCallsSnapshotModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: CommCallsSnapshotModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<CommCallsSnapshotModel>): CommCallsSnapshotModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: CommCallsSnapshotModel = {
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
