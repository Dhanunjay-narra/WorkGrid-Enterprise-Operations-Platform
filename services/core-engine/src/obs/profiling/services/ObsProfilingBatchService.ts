import { ObsProfilingBatchModel, ObsProfilingBatchValidator } from "@nexora/types/domains/obs/profiling/ObsProfilingBatch";

export class ObsProfilingBatchService {
  private repository = new Map<string, ObsProfilingBatchModel>();

  public create(data: Omit<ObsProfilingBatchModel, "id" | "version" | "createdAt" | "updatedAt">): ObsProfilingBatchModel {
    const id = "obs__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: ObsProfilingBatchModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = ObsProfilingBatchValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for ObsProfilingBatch: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): ObsProfilingBatchModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: ObsProfilingBatchModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<ObsProfilingBatchModel>): ObsProfilingBatchModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: ObsProfilingBatchModel = {
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
