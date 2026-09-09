import { IntSlackQueueModel, IntSlackQueueValidator } from "@nexora/types/domains/int/slack/IntSlackQueue";

export class IntSlackQueueService {
  private repository = new Map<string, IntSlackQueueModel>();

  public create(data: Omit<IntSlackQueueModel, "id" | "version" | "createdAt" | "updatedAt">): IntSlackQueueModel {
    const id = "int__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: IntSlackQueueModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = IntSlackQueueValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for IntSlackQueue: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): IntSlackQueueModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: IntSlackQueueModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<IntSlackQueueModel>): IntSlackQueueModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: IntSlackQueueModel = {
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
