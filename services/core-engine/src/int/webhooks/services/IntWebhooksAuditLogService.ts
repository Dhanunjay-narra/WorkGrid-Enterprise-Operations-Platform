import { IntWebhooksAuditLogModel, IntWebhooksAuditLogValidator } from "@nexora/types/domains/int/webhooks/IntWebhooksAuditLog";

export class IntWebhooksAuditLogService {
  private repository = new Map<string, IntWebhooksAuditLogModel>();

  public create(data: Omit<IntWebhooksAuditLogModel, "id" | "version" | "createdAt" | "updatedAt">): IntWebhooksAuditLogModel {
    const id = "int__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: IntWebhooksAuditLogModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = IntWebhooksAuditLogValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for IntWebhooksAuditLog: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): IntWebhooksAuditLogModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: IntWebhooksAuditLogModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<IntWebhooksAuditLogModel>): IntWebhooksAuditLogModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: IntWebhooksAuditLogModel = {
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
