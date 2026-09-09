import { IntWebhooksPolicyModel, IntWebhooksPolicyValidator } from "@nexora/types/domains/int/webhooks/IntWebhooksPolicy";

export class IntWebhooksPolicyService {
  private repository = new Map<string, IntWebhooksPolicyModel>();

  public create(data: Omit<IntWebhooksPolicyModel, "id" | "version" | "createdAt" | "updatedAt">): IntWebhooksPolicyModel {
    const id = "int__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: IntWebhooksPolicyModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = IntWebhooksPolicyValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for IntWebhooksPolicy: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): IntWebhooksPolicyModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: IntWebhooksPolicyModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<IntWebhooksPolicyModel>): IntWebhooksPolicyModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: IntWebhooksPolicyModel = {
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
