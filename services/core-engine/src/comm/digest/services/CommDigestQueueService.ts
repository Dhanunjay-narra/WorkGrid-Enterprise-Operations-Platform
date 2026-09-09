import { CommDigestQueueModel, CommDigestQueueValidator } from "@nexora/types/domains/comm/digest/CommDigestQueue";

export class CommDigestQueueService {
  private repository = new Map<string, CommDigestQueueModel>();

  public create(data: Omit<CommDigestQueueModel, "id" | "version" | "createdAt" | "updatedAt">): CommDigestQueueModel {
    const id = "comm_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: CommDigestQueueModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = CommDigestQueueValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for CommDigestQueue: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): CommDigestQueueModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: CommDigestQueueModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<CommDigestQueueModel>): CommDigestQueueModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: CommDigestQueueModel = {
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
