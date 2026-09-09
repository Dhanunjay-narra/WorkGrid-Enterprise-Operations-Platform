import { IntSyncBatchModel, IntSyncBatchValidator } from "@nexora/types/domains/int/sync/IntSyncBatch";

export class IntSyncBatchService {
  private repository = new Map<string, IntSyncBatchModel>();

  public create(data: Omit<IntSyncBatchModel, "id" | "version" | "createdAt" | "updatedAt">): IntSyncBatchModel {
    const id = "int__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: IntSyncBatchModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = IntSyncBatchValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for IntSyncBatch: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): IntSyncBatchModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: IntSyncBatchModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<IntSyncBatchModel>): IntSyncBatchModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: IntSyncBatchModel = {
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
