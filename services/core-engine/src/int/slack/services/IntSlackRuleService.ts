import { IntSlackRuleModel, IntSlackRuleValidator } from "@nexora/types/domains/int/slack/IntSlackRule";

export class IntSlackRuleService {
  private repository = new Map<string, IntSlackRuleModel>();

  public create(data: Omit<IntSlackRuleModel, "id" | "version" | "createdAt" | "updatedAt">): IntSlackRuleModel {
    const id = "int__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: IntSlackRuleModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = IntSlackRuleValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for IntSlackRule: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): IntSlackRuleModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: IntSlackRuleModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<IntSlackRuleModel>): IntSlackRuleModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: IntSlackRuleModel = {
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
