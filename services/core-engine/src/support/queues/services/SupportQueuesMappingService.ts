import { SupportQueuesMappingModel, SupportQueuesMappingValidator } from "@nexora/types/domains/support/queues/SupportQueuesMapping";

export class SupportQueuesMappingService {
  private repository = new Map<string, SupportQueuesMappingModel>();

  public create(data: Omit<SupportQueuesMappingModel, "id" | "version" | "createdAt" | "updatedAt">): SupportQueuesMappingModel {
    const id = "supp_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: SupportQueuesMappingModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = SupportQueuesMappingValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for SupportQueuesMapping: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): SupportQueuesMappingModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: SupportQueuesMappingModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<SupportQueuesMappingModel>): SupportQueuesMappingModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: SupportQueuesMappingModel = {
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
