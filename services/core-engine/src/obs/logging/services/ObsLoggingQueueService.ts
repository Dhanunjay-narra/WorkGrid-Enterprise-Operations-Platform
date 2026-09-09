import { ObsLoggingQueueModel, ObsLoggingQueueValidator } from "@nexora/types/domains/obs/logging/ObsLoggingQueue";

export class ObsLoggingQueueService {
  private repository = new Map<string, ObsLoggingQueueModel>();

  public create(data: Omit<ObsLoggingQueueModel, "id" | "version" | "createdAt" | "updatedAt">): ObsLoggingQueueModel {
    const id = "obs__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: ObsLoggingQueueModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = ObsLoggingQueueValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for ObsLoggingQueue: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): ObsLoggingQueueModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: ObsLoggingQueueModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<ObsLoggingQueueModel>): ObsLoggingQueueModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: ObsLoggingQueueModel = {
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
