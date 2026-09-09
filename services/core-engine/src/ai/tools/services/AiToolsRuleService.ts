import { AiToolsRuleModel, AiToolsRuleValidator } from "@nexora/types/domains/ai/tools/AiToolsRule";

export class AiToolsRuleService {
  private repository = new Map<string, AiToolsRuleModel>();

  public create(data: Omit<AiToolsRuleModel, "id" | "version" | "createdAt" | "updatedAt">): AiToolsRuleModel {
    const id = "ai_t_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: AiToolsRuleModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = AiToolsRuleValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for AiToolsRule: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): AiToolsRuleModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: AiToolsRuleModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<AiToolsRuleModel>): AiToolsRuleModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: AiToolsRuleModel = {
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
