import { BiQueriesQueueModel, BiQueriesQueueValidator } from "@nexora/types/domains/bi/queries/BiQueriesQueue";

export class BiQueriesQueueService {
  private repository = new Map<string, BiQueriesQueueModel>();

  public create(data: Omit<BiQueriesQueueModel, "id" | "version" | "createdAt" | "updatedAt">): BiQueriesQueueModel {
    const id = "bi_q_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: BiQueriesQueueModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = BiQueriesQueueValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for BiQueriesQueue: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): BiQueriesQueueModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: BiQueriesQueueModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<BiQueriesQueueModel>): BiQueriesQueueModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: BiQueriesQueueModel = {
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
