import { IntWebhooksBatchModel, IntWebhooksBatchValidator } from "@nexora/types/domains/int/webhooks/IntWebhooksBatch";

export class IntWebhooksBatchService {
  private repository = new Map<string, IntWebhooksBatchModel>();

  public create(data: Omit<IntWebhooksBatchModel, "id" | "version" | "createdAt" | "updatedAt">): IntWebhooksBatchModel {
    const id = "int__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: IntWebhooksBatchModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = IntWebhooksBatchValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for IntWebhooksBatch: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): IntWebhooksBatchModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: IntWebhooksBatchModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<IntWebhooksBatchModel>): IntWebhooksBatchModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: IntWebhooksBatchModel = {
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
