import { CommWebhooksRecordModel, CommWebhooksRecordValidator } from "@nexora/types/domains/comm/webhooks/CommWebhooksRecord";

export class CommWebhooksRecordService {
  private repository = new Map<string, CommWebhooksRecordModel>();

  public create(data: Omit<CommWebhooksRecordModel, "id" | "version" | "createdAt" | "updatedAt">): CommWebhooksRecordModel {
    const id = "comm_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: CommWebhooksRecordModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = CommWebhooksRecordValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for CommWebhooksRecord: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): CommWebhooksRecordModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: CommWebhooksRecordModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<CommWebhooksRecordModel>): CommWebhooksRecordModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: CommWebhooksRecordModel = {
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
