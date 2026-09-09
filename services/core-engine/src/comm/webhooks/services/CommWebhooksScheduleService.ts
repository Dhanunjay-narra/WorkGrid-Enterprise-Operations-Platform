import { CommWebhooksScheduleModel, CommWebhooksScheduleValidator } from "@nexora/types/domains/comm/webhooks/CommWebhooksSchedule";

export class CommWebhooksScheduleService {
  private repository = new Map<string, CommWebhooksScheduleModel>();

  public create(data: Omit<CommWebhooksScheduleModel, "id" | "version" | "createdAt" | "updatedAt">): CommWebhooksScheduleModel {
    const id = "comm_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: CommWebhooksScheduleModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = CommWebhooksScheduleValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for CommWebhooksSchedule: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): CommWebhooksScheduleModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: CommWebhooksScheduleModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<CommWebhooksScheduleModel>): CommWebhooksScheduleModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: CommWebhooksScheduleModel = {
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
