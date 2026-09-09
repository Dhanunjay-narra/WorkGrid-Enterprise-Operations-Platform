import { CommChannelsSnapshotModel, CommChannelsSnapshotValidator } from "@nexora/types/domains/comm/channels/CommChannelsSnapshot";

export class CommChannelsSnapshotService {
  private repository = new Map<string, CommChannelsSnapshotModel>();

  public create(data: Omit<CommChannelsSnapshotModel, "id" | "version" | "createdAt" | "updatedAt">): CommChannelsSnapshotModel {
    const id = "comm_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: CommChannelsSnapshotModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = CommChannelsSnapshotValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for CommChannelsSnapshot: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): CommChannelsSnapshotModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: CommChannelsSnapshotModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<CommChannelsSnapshotModel>): CommChannelsSnapshotModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: CommChannelsSnapshotModel = {
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
