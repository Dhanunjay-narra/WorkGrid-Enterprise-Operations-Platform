import { IntWebhooksRuleModel, IntWebhooksRuleValidator } from "@nexora/types/domains/int/webhooks/IntWebhooksRule";

export class IntWebhooksRuleService {
  private repository = new Map<string, IntWebhooksRuleModel>();

  public create(data: Omit<IntWebhooksRuleModel, "id" | "version" | "createdAt" | "updatedAt">): IntWebhooksRuleModel {
    const id = "int__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: IntWebhooksRuleModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = IntWebhooksRuleValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for IntWebhooksRule: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): IntWebhooksRuleModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: IntWebhooksRuleModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<IntWebhooksRuleModel>): IntWebhooksRuleModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: IntWebhooksRuleModel = {
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
