import { ObsLoggingBatchModel, ObsLoggingBatchValidator } from "@nexora/types/domains/obs/logging/ObsLoggingBatch";

export class ObsLoggingBatchService {
  private repository = new Map<string, ObsLoggingBatchModel>();

  public create(data: Omit<ObsLoggingBatchModel, "id" | "version" | "createdAt" | "updatedAt">): ObsLoggingBatchModel {
    const id = "obs__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: ObsLoggingBatchModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = ObsLoggingBatchValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for ObsLoggingBatch: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): ObsLoggingBatchModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: ObsLoggingBatchModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<ObsLoggingBatchModel>): ObsLoggingBatchModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: ObsLoggingBatchModel = {
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
