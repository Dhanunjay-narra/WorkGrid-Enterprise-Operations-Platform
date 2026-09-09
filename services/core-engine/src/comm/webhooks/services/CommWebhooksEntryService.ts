import { CommWebhooksEntryModel, CommWebhooksEntryValidator } from "@nexora/types/domains/comm/webhooks/CommWebhooksEntry";

export class CommWebhooksEntryService {
  private repository = new Map<string, CommWebhooksEntryModel>();

  public create(data: Omit<CommWebhooksEntryModel, "id" | "version" | "createdAt" | "updatedAt">): CommWebhooksEntryModel {
    const id = "comm_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: CommWebhooksEntryModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = CommWebhooksEntryValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for CommWebhooksEntry: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): CommWebhooksEntryModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: CommWebhooksEntryModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<CommWebhooksEntryModel>): CommWebhooksEntryModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: CommWebhooksEntryModel = {
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
