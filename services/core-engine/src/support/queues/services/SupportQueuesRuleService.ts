import { SupportQueuesRuleModel, SupportQueuesRuleValidator } from "@nexora/types/domains/support/queues/SupportQueuesRule";

export class SupportQueuesRuleService {
  private repository = new Map<string, SupportQueuesRuleModel>();

  public create(data: Omit<SupportQueuesRuleModel, "id" | "version" | "createdAt" | "updatedAt">): SupportQueuesRuleModel {
    const id = "supp_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: SupportQueuesRuleModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = SupportQueuesRuleValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for SupportQueuesRule: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): SupportQueuesRuleModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: SupportQueuesRuleModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<SupportQueuesRuleModel>): SupportQueuesRuleModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: SupportQueuesRuleModel = {
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
