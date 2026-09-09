import { IntWebhooksSummaryModel, IntWebhooksSummaryValidator } from "@nexora/types/domains/int/webhooks/IntWebhooksSummary";

export class IntWebhooksSummaryService {
  private repository = new Map<string, IntWebhooksSummaryModel>();

  public create(data: Omit<IntWebhooksSummaryModel, "id" | "version" | "createdAt" | "updatedAt">): IntWebhooksSummaryModel {
    const id = "int__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: IntWebhooksSummaryModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = IntWebhooksSummaryValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for IntWebhooksSummary: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): IntWebhooksSummaryModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: IntWebhooksSummaryModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<IntWebhooksSummaryModel>): IntWebhooksSummaryModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: IntWebhooksSummaryModel = {
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
