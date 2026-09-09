import { IntWebhookSubscriptionData, IntWebhookSubscriptionValidator } from "../../../../packages/types/src/domains/integrations/IntWebhookSubscription";

export class IntWebhookSubscriptionService {
  private repository = new Map<string, IntWebhookSubscriptionData>();

  public create(data: Omit<IntWebhookSubscriptionData, "id" | "createdAt" | "updatedAt">): IntWebhookSubscriptionData {
    const id = "int_" + Math.random().toString(36).substring(2, 9);
    const now = new Date().toISOString();
    const item: IntWebhookSubscriptionData = {
      ...data,
      id,
      createdAt: now,
      updatedAt: now
    };
    const validation = IntWebhookSubscriptionValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for IntWebhookSubscription: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): IntWebhookSubscriptionData | undefined {
    return this.repository.get(id);
  }

  public listByTenant(tenantId: string): IntWebhookSubscriptionData[] {
    return Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
  }

  public update(id: string, updates: Partial<IntWebhookSubscriptionData>): IntWebhookSubscriptionData | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: IntWebhookSubscriptionData = { ...existing, ...updates, updatedAt: new Date().toISOString() };
    this.repository.set(id, updated);
    return updated;
  }

  public delete(id: string): boolean {
    return this.repository.delete(id);
  }
}
