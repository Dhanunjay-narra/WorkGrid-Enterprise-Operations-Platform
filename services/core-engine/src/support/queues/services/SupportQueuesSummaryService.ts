import { SupportQueuesSummaryModel, SupportQueuesSummaryValidator } from "@nexora/types/domains/support/queues/SupportQueuesSummary";

export class SupportQueuesSummaryService {
  private repository = new Map<string, SupportQueuesSummaryModel>();

  public create(data: Omit<SupportQueuesSummaryModel, "id" | "version" | "createdAt" | "updatedAt">): SupportQueuesSummaryModel {
    const id = "supp_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: SupportQueuesSummaryModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = SupportQueuesSummaryValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for SupportQueuesSummary: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): SupportQueuesSummaryModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: SupportQueuesSummaryModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<SupportQueuesSummaryModel>): SupportQueuesSummaryModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: SupportQueuesSummaryModel = {
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
