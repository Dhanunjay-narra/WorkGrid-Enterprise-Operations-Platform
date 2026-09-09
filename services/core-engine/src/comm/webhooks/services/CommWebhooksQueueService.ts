import { CommWebhooksQueueModel, CommWebhooksQueueValidator } from "@nexora/types/domains/comm/webhooks/CommWebhooksQueue";

export class CommWebhooksQueueService {
  private repository = new Map<string, CommWebhooksQueueModel>();

  public create(data: Omit<CommWebhooksQueueModel, "id" | "version" | "createdAt" | "updatedAt">): CommWebhooksQueueModel {
    const id = "comm_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: CommWebhooksQueueModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = CommWebhooksQueueValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for CommWebhooksQueue: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): CommWebhooksQueueModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: CommWebhooksQueueModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<CommWebhooksQueueModel>): CommWebhooksQueueModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: CommWebhooksQueueModel = {
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
