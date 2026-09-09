import { ObsTracingBatchModel, ObsTracingBatchValidator } from "@nexora/types/domains/obs/tracing/ObsTracingBatch";

export class ObsTracingBatchService {
  private repository = new Map<string, ObsTracingBatchModel>();

  public create(data: Omit<ObsTracingBatchModel, "id" | "version" | "createdAt" | "updatedAt">): ObsTracingBatchModel {
    const id = "obs__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: ObsTracingBatchModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = ObsTracingBatchValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for ObsTracingBatch: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): ObsTracingBatchModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: ObsTracingBatchModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<ObsTracingBatchModel>): ObsTracingBatchModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: ObsTracingBatchModel = {
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
