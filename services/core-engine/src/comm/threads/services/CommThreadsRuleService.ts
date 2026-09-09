import { CommThreadsRuleModel, CommThreadsRuleValidator } from "@nexora/types/domains/comm/threads/CommThreadsRule";

export class CommThreadsRuleService {
  private repository = new Map<string, CommThreadsRuleModel>();

  public create(data: Omit<CommThreadsRuleModel, "id" | "version" | "createdAt" | "updatedAt">): CommThreadsRuleModel {
    const id = "comm_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: CommThreadsRuleModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = CommThreadsRuleValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for CommThreadsRule: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): CommThreadsRuleModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: CommThreadsRuleModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<CommThreadsRuleModel>): CommThreadsRuleModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: CommThreadsRuleModel = {
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
