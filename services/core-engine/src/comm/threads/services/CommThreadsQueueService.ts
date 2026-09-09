import { CommThreadsQueueModel, CommThreadsQueueValidator } from "@nexora/types/domains/comm/threads/CommThreadsQueue";

export class CommThreadsQueueService {
  private repository = new Map<string, CommThreadsQueueModel>();

  public create(data: Omit<CommThreadsQueueModel, "id" | "version" | "createdAt" | "updatedAt">): CommThreadsQueueModel {
    const id = "comm_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: CommThreadsQueueModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = CommThreadsQueueValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for CommThreadsQueue: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): CommThreadsQueueModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: CommThreadsQueueModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<CommThreadsQueueModel>): CommThreadsQueueModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: CommThreadsQueueModel = {
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
