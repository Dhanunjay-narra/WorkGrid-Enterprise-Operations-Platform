import { CommNotificationsRuleModel, CommNotificationsRuleValidator } from "@nexora/types/domains/comm/notifications/CommNotificationsRule";

export class CommNotificationsRuleService {
  private repository = new Map<string, CommNotificationsRuleModel>();

  public create(data: Omit<CommNotificationsRuleModel, "id" | "version" | "createdAt" | "updatedAt">): CommNotificationsRuleModel {
    const id = "comm_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: CommNotificationsRuleModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = CommNotificationsRuleValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for CommNotificationsRule: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): CommNotificationsRuleModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: CommNotificationsRuleModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<CommNotificationsRuleModel>): CommNotificationsRuleModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: CommNotificationsRuleModel = {
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
