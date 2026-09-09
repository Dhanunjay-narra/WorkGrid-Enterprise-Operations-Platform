import { CommWebhooksSummaryModel, CommWebhooksSummaryValidator } from "@nexora/types/domains/comm/webhooks/CommWebhooksSummary";

export class CommWebhooksSummaryService {
  private repository = new Map<string, CommWebhooksSummaryModel>();

  public create(data: Omit<CommWebhooksSummaryModel, "id" | "version" | "createdAt" | "updatedAt">): CommWebhooksSummaryModel {
    const id = "comm_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: CommWebhooksSummaryModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = CommWebhooksSummaryValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for CommWebhooksSummary: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): CommWebhooksSummaryModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: CommWebhooksSummaryModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<CommWebhooksSummaryModel>): CommWebhooksSummaryModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: CommWebhooksSummaryModel = {
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
