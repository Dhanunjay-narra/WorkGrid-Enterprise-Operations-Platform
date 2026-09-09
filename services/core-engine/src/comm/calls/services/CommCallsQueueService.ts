import { CommCallsQueueModel, CommCallsQueueValidator } from "@nexora/types/domains/comm/calls/CommCallsQueue";

export class CommCallsQueueService {
  private repository = new Map<string, CommCallsQueueModel>();

  public create(data: Omit<CommCallsQueueModel, "id" | "version" | "createdAt" | "updatedAt">): CommCallsQueueModel {
    const id = "comm_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: CommCallsQueueModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = CommCallsQueueValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for CommCallsQueue: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): CommCallsQueueModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: CommCallsQueueModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<CommCallsQueueModel>): CommCallsQueueModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: CommCallsQueueModel = {
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
