import { IntSyncRuleModel, IntSyncRuleValidator } from "@nexora/types/domains/int/sync/IntSyncRule";

export class IntSyncRuleService {
  private repository = new Map<string, IntSyncRuleModel>();

  public create(data: Omit<IntSyncRuleModel, "id" | "version" | "createdAt" | "updatedAt">): IntSyncRuleModel {
    const id = "int__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: IntSyncRuleModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = IntSyncRuleValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for IntSyncRule: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): IntSyncRuleModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: IntSyncRuleModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<IntSyncRuleModel>): IntSyncRuleModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: IntSyncRuleModel = {
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
