import { BiQueriesRuleModel, BiQueriesRuleValidator } from "@nexora/types/domains/bi/queries/BiQueriesRule";

export class BiQueriesRuleService {
  private repository = new Map<string, BiQueriesRuleModel>();

  public create(data: Omit<BiQueriesRuleModel, "id" | "version" | "createdAt" | "updatedAt">): BiQueriesRuleModel {
    const id = "bi_q_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: BiQueriesRuleModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = BiQueriesRuleValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for BiQueriesRule: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): BiQueriesRuleModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: BiQueriesRuleModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<BiQueriesRuleModel>): BiQueriesRuleModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: BiQueriesRuleModel = {
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
