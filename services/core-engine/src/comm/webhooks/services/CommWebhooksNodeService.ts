import { CommWebhooksNodeModel, CommWebhooksNodeValidator } from "@nexora/types/domains/comm/webhooks/CommWebhooksNode";

export class CommWebhooksNodeService {
  private repository = new Map<string, CommWebhooksNodeModel>();

  public create(data: Omit<CommWebhooksNodeModel, "id" | "version" | "createdAt" | "updatedAt">): CommWebhooksNodeModel {
    const id = "comm_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: CommWebhooksNodeModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = CommWebhooksNodeValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for CommWebhooksNode: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): CommWebhooksNodeModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: CommWebhooksNodeModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<CommWebhooksNodeModel>): CommWebhooksNodeModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: CommWebhooksNodeModel = {
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
