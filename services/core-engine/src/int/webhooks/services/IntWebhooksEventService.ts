import { IntWebhooksEventModel, IntWebhooksEventValidator } from "@nexora/types/domains/int/webhooks/IntWebhooksEvent";

export class IntWebhooksEventService {
  private repository = new Map<string, IntWebhooksEventModel>();

  public create(data: Omit<IntWebhooksEventModel, "id" | "version" | "createdAt" | "updatedAt">): IntWebhooksEventModel {
    const id = "int__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: IntWebhooksEventModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = IntWebhooksEventValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for IntWebhooksEvent: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): IntWebhooksEventModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: IntWebhooksEventModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<IntWebhooksEventModel>): IntWebhooksEventModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: IntWebhooksEventModel = {
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
