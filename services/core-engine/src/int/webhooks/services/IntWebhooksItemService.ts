import { IntWebhooksItemModel, IntWebhooksItemValidator } from "@nexora/types/domains/int/webhooks/IntWebhooksItem";

export class IntWebhooksItemService {
  private repository = new Map<string, IntWebhooksItemModel>();

  public create(data: Omit<IntWebhooksItemModel, "id" | "version" | "createdAt" | "updatedAt">): IntWebhooksItemModel {
    const id = "int__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: IntWebhooksItemModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = IntWebhooksItemValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for IntWebhooksItem: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): IntWebhooksItemModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: IntWebhooksItemModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<IntWebhooksItemModel>): IntWebhooksItemModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: IntWebhooksItemModel = {
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
