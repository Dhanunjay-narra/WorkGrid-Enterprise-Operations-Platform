import { CommDigestBatchModel, CommDigestBatchValidator } from "@nexora/types/domains/comm/digest/CommDigestBatch";

export class CommDigestBatchService {
  private repository = new Map<string, CommDigestBatchModel>();

  public create(data: Omit<CommDigestBatchModel, "id" | "version" | "createdAt" | "updatedAt">): CommDigestBatchModel {
    const id = "comm_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: CommDigestBatchModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = CommDigestBatchValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for CommDigestBatch: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): CommDigestBatchModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: CommDigestBatchModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<CommDigestBatchModel>): CommDigestBatchModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: CommDigestBatchModel = {
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
