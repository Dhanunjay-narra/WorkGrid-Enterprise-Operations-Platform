import { SupportQueuesQueueModel, SupportQueuesQueueValidator } from "@nexora/types/domains/support/queues/SupportQueuesQueue";

export class SupportQueuesQueueService {
  private repository = new Map<string, SupportQueuesQueueModel>();

  public create(data: Omit<SupportQueuesQueueModel, "id" | "version" | "createdAt" | "updatedAt">): SupportQueuesQueueModel {
    const id = "supp_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: SupportQueuesQueueModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = SupportQueuesQueueValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for SupportQueuesQueue: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): SupportQueuesQueueModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: SupportQueuesQueueModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<SupportQueuesQueueModel>): SupportQueuesQueueModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: SupportQueuesQueueModel = {
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
