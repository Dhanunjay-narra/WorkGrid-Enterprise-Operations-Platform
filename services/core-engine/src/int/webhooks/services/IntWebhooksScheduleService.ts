import { IntWebhooksScheduleModel, IntWebhooksScheduleValidator } from "@nexora/types/domains/int/webhooks/IntWebhooksSchedule";

export class IntWebhooksScheduleService {
  private repository = new Map<string, IntWebhooksScheduleModel>();

  public create(data: Omit<IntWebhooksScheduleModel, "id" | "version" | "createdAt" | "updatedAt">): IntWebhooksScheduleModel {
    const id = "int__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: IntWebhooksScheduleModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = IntWebhooksScheduleValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for IntWebhooksSchedule: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): IntWebhooksScheduleModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: IntWebhooksScheduleModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<IntWebhooksScheduleModel>): IntWebhooksScheduleModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: IntWebhooksScheduleModel = {
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
