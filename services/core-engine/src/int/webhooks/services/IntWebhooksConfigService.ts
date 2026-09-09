import { IntWebhooksConfigModel, IntWebhooksConfigValidator } from "@nexora/types/domains/int/webhooks/IntWebhooksConfig";

export class IntWebhooksConfigService {
  private repository = new Map<string, IntWebhooksConfigModel>();

  public create(data: Omit<IntWebhooksConfigModel, "id" | "version" | "createdAt" | "updatedAt">): IntWebhooksConfigModel {
    const id = "int__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: IntWebhooksConfigModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = IntWebhooksConfigValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for IntWebhooksConfig: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): IntWebhooksConfigModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: IntWebhooksConfigModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<IntWebhooksConfigModel>): IntWebhooksConfigModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: IntWebhooksConfigModel = {
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
