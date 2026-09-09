import { IntOauthQueueModel, IntOauthQueueValidator } from "@nexora/types/domains/int/oauth/IntOauthQueue";

export class IntOauthQueueService {
  private repository = new Map<string, IntOauthQueueModel>();

  public create(data: Omit<IntOauthQueueModel, "id" | "version" | "createdAt" | "updatedAt">): IntOauthQueueModel {
    const id = "int__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: IntOauthQueueModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = IntOauthQueueValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for IntOauthQueue: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): IntOauthQueueModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: IntOauthQueueModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<IntOauthQueueModel>): IntOauthQueueModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: IntOauthQueueModel = {
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
