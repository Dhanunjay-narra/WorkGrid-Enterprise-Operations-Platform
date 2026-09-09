import { ObsTracingQueueModel, ObsTracingQueueValidator } from "@nexora/types/domains/obs/tracing/ObsTracingQueue";

export class ObsTracingQueueService {
  private repository = new Map<string, ObsTracingQueueModel>();

  public create(data: Omit<ObsTracingQueueModel, "id" | "version" | "createdAt" | "updatedAt">): ObsTracingQueueModel {
    const id = "obs__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: ObsTracingQueueModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = ObsTracingQueueValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for ObsTracingQueue: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): ObsTracingQueueModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: ObsTracingQueueModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<ObsTracingQueueModel>): ObsTracingQueueModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: ObsTracingQueueModel = {
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
