import { TenancyBatchModel, TenancyBatchValidator } from "@nexora/types/domains/tenancy/TenancyBatch";

export class TenancyBatchService {
  private repository = new Map<string, TenancyBatchModel>();

  public create(data: Omit<TenancyBatchModel, "id" | "version" | "createdAt" | "updatedAt">): TenancyBatchModel {
    const id = "tena_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: TenancyBatchModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = TenancyBatchValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for TenancyBatch: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): TenancyBatchModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: TenancyBatchModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<TenancyBatchModel>): TenancyBatchModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: TenancyBatchModel = {
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
