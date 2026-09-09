import { AbacBatchModel, AbacBatchValidator } from "@nexora/types/domains/abac/AbacBatch";

export class AbacBatchService {
  private repository = new Map<string, AbacBatchModel>();

  public create(data: Omit<AbacBatchModel, "id" | "version" | "createdAt" | "updatedAt">): AbacBatchModel {
    const id = "abac_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: AbacBatchModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = AbacBatchValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for AbacBatch: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): AbacBatchModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: AbacBatchModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<AbacBatchModel>): AbacBatchModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: AbacBatchModel = {
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
