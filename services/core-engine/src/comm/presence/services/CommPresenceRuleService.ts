import { CommPresenceRuleModel, CommPresenceRuleValidator } from "@nexora/types/domains/comm/presence/CommPresenceRule";

export class CommPresenceRuleService {
  private repository = new Map<string, CommPresenceRuleModel>();

  public create(data: Omit<CommPresenceRuleModel, "id" | "version" | "createdAt" | "updatedAt">): CommPresenceRuleModel {
    const id = "comm_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: CommPresenceRuleModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = CommPresenceRuleValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for CommPresenceRule: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): CommPresenceRuleModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: CommPresenceRuleModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<CommPresenceRuleModel>): CommPresenceRuleModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: CommPresenceRuleModel = {
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
