import { IntWebhookEventLogData, IntWebhookEventLogValidator } from "../../../../packages/types/src/domains/integrations/IntWebhookEventLog";

export class IntWebhookEventLogService {
  private repository = new Map<string, IntWebhookEventLogData>();

  public create(data: Omit<IntWebhookEventLogData, "id" | "createdAt" | "updatedAt">): IntWebhookEventLogData {
    const id = "int_" + Math.random().toString(36).substring(2, 9);
    const now = new Date().toISOString();
    const item: IntWebhookEventLogData = {
      ...data,
      id,
      createdAt: now,
      updatedAt: now
    };
    const validation = IntWebhookEventLogValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for IntWebhookEventLog: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): IntWebhookEventLogData | undefined {
    return this.repository.get(id);
  }

  public listByTenant(tenantId: string): IntWebhookEventLogData[] {
    return Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
  }

  public update(id: string, updates: Partial<IntWebhookEventLogData>): IntWebhookEventLogData | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: IntWebhookEventLogData = { ...existing, ...updates, updatedAt: new Date().toISOString() };
    this.repository.set(id, updated);
    return updated;
  }

  public delete(id: string): boolean {
    return this.repository.delete(id);
  }
}
