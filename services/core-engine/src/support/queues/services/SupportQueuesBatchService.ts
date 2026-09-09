import { SupportQueuesBatchModel, SupportQueuesBatchValidator } from "@nexora/types/domains/support/queues/SupportQueuesBatch";

export class SupportQueuesBatchService {
  private repository = new Map<string, SupportQueuesBatchModel>();

  public create(data: Omit<SupportQueuesBatchModel, "id" | "version" | "createdAt" | "updatedAt">): SupportQueuesBatchModel {
    const id = "supp_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: SupportQueuesBatchModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = SupportQueuesBatchValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for SupportQueuesBatch: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): SupportQueuesBatchModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: SupportQueuesBatchModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<SupportQueuesBatchModel>): SupportQueuesBatchModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: SupportQueuesBatchModel = {
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
