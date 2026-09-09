import { AiAgentsRuleModel, AiAgentsRuleValidator } from "@nexora/types/domains/ai/agents/AiAgentsRule";

export class AiAgentsRuleService {
  private repository = new Map<string, AiAgentsRuleModel>();

  public create(data: Omit<AiAgentsRuleModel, "id" | "version" | "createdAt" | "updatedAt">): AiAgentsRuleModel {
    const id = "ai_a_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: AiAgentsRuleModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = AiAgentsRuleValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for AiAgentsRule: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): AiAgentsRuleModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: AiAgentsRuleModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<AiAgentsRuleModel>): AiAgentsRuleModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: AiAgentsRuleModel = {
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
