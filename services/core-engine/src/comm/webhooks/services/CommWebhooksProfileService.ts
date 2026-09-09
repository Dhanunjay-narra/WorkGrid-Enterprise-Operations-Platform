import { CommWebhooksProfileModel, CommWebhooksProfileValidator } from "@nexora/types/domains/comm/webhooks/CommWebhooksProfile";

export class CommWebhooksProfileService {
  private repository = new Map<string, CommWebhooksProfileModel>();

  public create(data: Omit<CommWebhooksProfileModel, "id" | "version" | "createdAt" | "updatedAt">): CommWebhooksProfileModel {
    const id = "comm_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: CommWebhooksProfileModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = CommWebhooksProfileValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for CommWebhooksProfile: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): CommWebhooksProfileModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: CommWebhooksProfileModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<CommWebhooksProfileModel>): CommWebhooksProfileModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: CommWebhooksProfileModel = {
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
