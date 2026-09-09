import { IntWebhooksSnapshotModel, IntWebhooksSnapshotValidator } from "@nexora/types/domains/int/webhooks/IntWebhooksSnapshot";

export class IntWebhooksSnapshotService {
  private repository = new Map<string, IntWebhooksSnapshotModel>();

  public create(data: Omit<IntWebhooksSnapshotModel, "id" | "version" | "createdAt" | "updatedAt">): IntWebhooksSnapshotModel {
    const id = "int__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: IntWebhooksSnapshotModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = IntWebhooksSnapshotValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for IntWebhooksSnapshot: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): IntWebhooksSnapshotModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: IntWebhooksSnapshotModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<IntWebhooksSnapshotModel>): IntWebhooksSnapshotModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: IntWebhooksSnapshotModel = {
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
