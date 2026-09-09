import { IntWebhooksStateModel, IntWebhooksStateValidator } from "@nexora/types/domains/int/webhooks/IntWebhooksState";

export class IntWebhooksStateService {
  private repository = new Map<string, IntWebhooksStateModel>();

  public create(data: Omit<IntWebhooksStateModel, "id" | "version" | "createdAt" | "updatedAt">): IntWebhooksStateModel {
    const id = "int__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: IntWebhooksStateModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = IntWebhooksStateValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for IntWebhooksState: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): IntWebhooksStateModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: IntWebhooksStateModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<IntWebhooksStateModel>): IntWebhooksStateModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: IntWebhooksStateModel = {
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
