import { AiRagRuleModel, AiRagRuleValidator } from "@nexora/types/domains/ai/rag/AiRagRule";

export class AiRagRuleService {
  private repository = new Map<string, AiRagRuleModel>();

  public create(data: Omit<AiRagRuleModel, "id" | "version" | "createdAt" | "updatedAt">): AiRagRuleModel {
    const id = "ai_r_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: AiRagRuleModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = AiRagRuleValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for AiRagRule: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): AiRagRuleModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: AiRagRuleModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<AiRagRuleModel>): AiRagRuleModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: AiRagRuleModel = {
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
