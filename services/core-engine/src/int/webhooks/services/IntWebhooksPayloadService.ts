import { IntWebhooksPayloadModel, IntWebhooksPayloadValidator } from "@nexora/types/domains/int/webhooks/IntWebhooksPayload";

export class IntWebhooksPayloadService {
  private repository = new Map<string, IntWebhooksPayloadModel>();

  public create(data: Omit<IntWebhooksPayloadModel, "id" | "version" | "createdAt" | "updatedAt">): IntWebhooksPayloadModel {
    const id = "int__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: IntWebhooksPayloadModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = IntWebhooksPayloadValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for IntWebhooksPayload: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): IntWebhooksPayloadModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: IntWebhooksPayloadModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<IntWebhooksPayloadModel>): IntWebhooksPayloadModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: IntWebhooksPayloadModel = {
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
