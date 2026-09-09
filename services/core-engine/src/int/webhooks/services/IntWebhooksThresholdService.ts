import { IntWebhooksThresholdModel, IntWebhooksThresholdValidator } from "@nexora/types/domains/int/webhooks/IntWebhooksThreshold";

export class IntWebhooksThresholdService {
  private repository = new Map<string, IntWebhooksThresholdModel>();

  public create(data: Omit<IntWebhooksThresholdModel, "id" | "version" | "createdAt" | "updatedAt">): IntWebhooksThresholdModel {
    const id = "int__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: IntWebhooksThresholdModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = IntWebhooksThresholdValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for IntWebhooksThreshold: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): IntWebhooksThresholdModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: IntWebhooksThresholdModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<IntWebhooksThresholdModel>): IntWebhooksThresholdModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: IntWebhooksThresholdModel = {
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
