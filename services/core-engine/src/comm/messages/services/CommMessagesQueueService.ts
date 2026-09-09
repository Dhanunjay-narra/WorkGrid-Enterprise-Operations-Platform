import { CommMessagesQueueModel, CommMessagesQueueValidator } from "@nexora/types/domains/comm/messages/CommMessagesQueue";

export class CommMessagesQueueService {
  private repository = new Map<string, CommMessagesQueueModel>();

  public create(data: Omit<CommMessagesQueueModel, "id" | "version" | "createdAt" | "updatedAt">): CommMessagesQueueModel {
    const id = "comm_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: CommMessagesQueueModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = CommMessagesQueueValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for CommMessagesQueue: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): CommMessagesQueueModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: CommMessagesQueueModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<CommMessagesQueueModel>): CommMessagesQueueModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: CommMessagesQueueModel = {
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
