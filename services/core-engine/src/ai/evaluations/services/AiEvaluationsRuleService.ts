import { AiEvaluationsRuleModel, AiEvaluationsRuleValidator } from "@nexora/types/domains/ai/evaluations/AiEvaluationsRule";

export class AiEvaluationsRuleService {
  private repository = new Map<string, AiEvaluationsRuleModel>();

  public create(data: Omit<AiEvaluationsRuleModel, "id" | "version" | "createdAt" | "updatedAt">): AiEvaluationsRuleModel {
    const id = "ai_e_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: AiEvaluationsRuleModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = AiEvaluationsRuleValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for AiEvaluationsRule: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): AiEvaluationsRuleModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: AiEvaluationsRuleModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<AiEvaluationsRuleModel>): AiEvaluationsRuleModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: AiEvaluationsRuleModel = {
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
