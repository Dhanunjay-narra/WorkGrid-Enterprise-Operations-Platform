import { CommWebhooksMappingModel, CommWebhooksMappingValidator } from "@nexora/types/domains/comm/webhooks/CommWebhooksMapping";

export class CommWebhooksMappingService {
  private repository = new Map<string, CommWebhooksMappingModel>();

  public create(data: Omit<CommWebhooksMappingModel, "id" | "version" | "createdAt" | "updatedAt">): CommWebhooksMappingModel {
    const id = "comm_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: CommWebhooksMappingModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = CommWebhooksMappingValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for CommWebhooksMapping: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): CommWebhooksMappingModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: CommWebhooksMappingModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<CommWebhooksMappingModel>): CommWebhooksMappingModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: CommWebhooksMappingModel = {
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
