import { SupportQueuesSnapshotModel, SupportQueuesSnapshotValidator } from "@nexora/types/domains/support/queues/SupportQueuesSnapshot";

export class SupportQueuesSnapshotService {
  private repository = new Map<string, SupportQueuesSnapshotModel>();

  public create(data: Omit<SupportQueuesSnapshotModel, "id" | "version" | "createdAt" | "updatedAt">): SupportQueuesSnapshotModel {
    const id = "supp_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: SupportQueuesSnapshotModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = SupportQueuesSnapshotValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for SupportQueuesSnapshot: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): SupportQueuesSnapshotModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: SupportQueuesSnapshotModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<SupportQueuesSnapshotModel>): SupportQueuesSnapshotModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: SupportQueuesSnapshotModel = {
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
