import { IntWebhooksNodeModel, IntWebhooksNodeValidator } from "@nexora/types/domains/int/webhooks/IntWebhooksNode";

export class IntWebhooksNodeService {
  private repository = new Map<string, IntWebhooksNodeModel>();

  public create(data: Omit<IntWebhooksNodeModel, "id" | "version" | "createdAt" | "updatedAt">): IntWebhooksNodeModel {
    const id = "int__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: IntWebhooksNodeModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = IntWebhooksNodeValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for IntWebhooksNode: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): IntWebhooksNodeModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: IntWebhooksNodeModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<IntWebhooksNodeModel>): IntWebhooksNodeModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: IntWebhooksNodeModel = {
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
