import { CommWebhooksBatchModel, CommWebhooksBatchValidator } from "@nexora/types/domains/comm/webhooks/CommWebhooksBatch";

export class CommWebhooksBatchService {
  private repository = new Map<string, CommWebhooksBatchModel>();

  public create(data: Omit<CommWebhooksBatchModel, "id" | "version" | "createdAt" | "updatedAt">): CommWebhooksBatchModel {
    const id = "comm_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: CommWebhooksBatchModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = CommWebhooksBatchValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for CommWebhooksBatch: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): CommWebhooksBatchModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: CommWebhooksBatchModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<CommWebhooksBatchModel>): CommWebhooksBatchModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: CommWebhooksBatchModel = {
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
