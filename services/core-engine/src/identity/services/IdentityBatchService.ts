import { IdentityBatchModel, IdentityBatchValidator } from "@nexora/types/domains/identity/IdentityBatch";

export class IdentityBatchService {
  private repository = new Map<string, IdentityBatchModel>();

  public create(data: Omit<IdentityBatchModel, "id" | "version" | "createdAt" | "updatedAt">): IdentityBatchModel {
    const id = "iden_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: IdentityBatchModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = IdentityBatchValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for IdentityBatch: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): IdentityBatchModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: IdentityBatchModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<IdentityBatchModel>): IdentityBatchModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: IdentityBatchModel = {
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
