import { IntOauthBatchModel, IntOauthBatchValidator } from "@nexora/types/domains/int/oauth/IntOauthBatch";

export class IntOauthBatchService {
  private repository = new Map<string, IntOauthBatchModel>();

  public create(data: Omit<IntOauthBatchModel, "id" | "version" | "createdAt" | "updatedAt">): IntOauthBatchModel {
    const id = "int__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: IntOauthBatchModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = IntOauthBatchValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for IntOauthBatch: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): IntOauthBatchModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: IntOauthBatchModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<IntOauthBatchModel>): IntOauthBatchModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: IntOauthBatchModel = {
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
