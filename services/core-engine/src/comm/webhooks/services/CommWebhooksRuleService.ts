import { CommWebhooksRuleModel, CommWebhooksRuleValidator } from "@nexora/types/domains/comm/webhooks/CommWebhooksRule";

export class CommWebhooksRuleService {
  private repository = new Map<string, CommWebhooksRuleModel>();

  public create(data: Omit<CommWebhooksRuleModel, "id" | "version" | "createdAt" | "updatedAt">): CommWebhooksRuleModel {
    const id = "comm_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: CommWebhooksRuleModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = CommWebhooksRuleValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for CommWebhooksRule: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): CommWebhooksRuleModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: CommWebhooksRuleModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<CommWebhooksRuleModel>): CommWebhooksRuleModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: CommWebhooksRuleModel = {
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
