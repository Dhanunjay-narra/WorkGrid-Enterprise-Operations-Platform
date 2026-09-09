import { RbacBatchModel, RbacBatchValidator } from "@nexora/types/domains/rbac/RbacBatch";

export class RbacBatchService {
  private repository = new Map<string, RbacBatchModel>();

  public create(data: Omit<RbacBatchModel, "id" | "version" | "createdAt" | "updatedAt">): RbacBatchModel {
    const id = "rbac_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: RbacBatchModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = RbacBatchValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for RbacBatch: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): RbacBatchModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: RbacBatchModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<RbacBatchModel>): RbacBatchModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: RbacBatchModel = {
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
