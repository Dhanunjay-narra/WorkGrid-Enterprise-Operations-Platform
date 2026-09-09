import { CommWebhooksSessionModel, CommWebhooksSessionValidator } from "@nexora/types/domains/comm/webhooks/CommWebhooksSession";

export class CommWebhooksSessionService {
  private repository = new Map<string, CommWebhooksSessionModel>();

  public create(data: Omit<CommWebhooksSessionModel, "id" | "version" | "createdAt" | "updatedAt">): CommWebhooksSessionModel {
    const id = "comm_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: CommWebhooksSessionModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = CommWebhooksSessionValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for CommWebhooksSession: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): CommWebhooksSessionModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: CommWebhooksSessionModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<CommWebhooksSessionModel>): CommWebhooksSessionModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: CommWebhooksSessionModel = {
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
