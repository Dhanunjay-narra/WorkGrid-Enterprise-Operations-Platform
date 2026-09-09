import { CommMessagesSnapshotModel, CommMessagesSnapshotValidator } from "@nexora/types/domains/comm/messages/CommMessagesSnapshot";

export class CommMessagesSnapshotService {
  private repository = new Map<string, CommMessagesSnapshotModel>();

  public create(data: Omit<CommMessagesSnapshotModel, "id" | "version" | "createdAt" | "updatedAt">): CommMessagesSnapshotModel {
    const id = "comm_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: CommMessagesSnapshotModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = CommMessagesSnapshotValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for CommMessagesSnapshot: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): CommMessagesSnapshotModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: CommMessagesSnapshotModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<CommMessagesSnapshotModel>): CommMessagesSnapshotModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: CommMessagesSnapshotModel = {
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
