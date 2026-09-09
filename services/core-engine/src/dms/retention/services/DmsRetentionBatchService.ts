import { DmsRetentionBatchModel, DmsRetentionBatchValidator } from "@nexora/types/domains/dms/retention/DmsRetentionBatch";

export class DmsRetentionBatchService {
  private repository = new Map<string, DmsRetentionBatchModel>();

  public create(data: Omit<DmsRetentionBatchModel, "id" | "version" | "createdAt" | "updatedAt">): DmsRetentionBatchModel {
    const id = "dms__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: DmsRetentionBatchModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = DmsRetentionBatchValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for DmsRetentionBatch: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): DmsRetentionBatchModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: DmsRetentionBatchModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<DmsRetentionBatchModel>): DmsRetentionBatchModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: DmsRetentionBatchModel = {
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
