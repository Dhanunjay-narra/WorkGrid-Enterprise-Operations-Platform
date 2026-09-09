import { IntWebhooksTaskModel, IntWebhooksTaskValidator } from "@nexora/types/domains/int/webhooks/IntWebhooksTask";

export class IntWebhooksTaskService {
  private repository = new Map<string, IntWebhooksTaskModel>();

  public create(data: Omit<IntWebhooksTaskModel, "id" | "version" | "createdAt" | "updatedAt">): IntWebhooksTaskModel {
    const id = "int__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: IntWebhooksTaskModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = IntWebhooksTaskValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for IntWebhooksTask: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): IntWebhooksTaskModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: IntWebhooksTaskModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<IntWebhooksTaskModel>): IntWebhooksTaskModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: IntWebhooksTaskModel = {
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
