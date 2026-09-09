import { CommWebhooksPolicyModel, CommWebhooksPolicyValidator } from "@nexora/types/domains/comm/webhooks/CommWebhooksPolicy";

export class CommWebhooksPolicyService {
  private repository = new Map<string, CommWebhooksPolicyModel>();

  public create(data: Omit<CommWebhooksPolicyModel, "id" | "version" | "createdAt" | "updatedAt">): CommWebhooksPolicyModel {
    const id = "comm_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: CommWebhooksPolicyModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = CommWebhooksPolicyValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for CommWebhooksPolicy: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): CommWebhooksPolicyModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: CommWebhooksPolicyModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<CommWebhooksPolicyModel>): CommWebhooksPolicyModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: CommWebhooksPolicyModel = {
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
