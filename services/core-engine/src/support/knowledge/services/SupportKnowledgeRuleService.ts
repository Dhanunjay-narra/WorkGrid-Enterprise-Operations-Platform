import { SupportKnowledgeRuleModel, SupportKnowledgeRuleValidator } from "@nexora/types/domains/support/knowledge/SupportKnowledgeRule";

export class SupportKnowledgeRuleService {
  private repository = new Map<string, SupportKnowledgeRuleModel>();

  public create(data: Omit<SupportKnowledgeRuleModel, "id" | "version" | "createdAt" | "updatedAt">): SupportKnowledgeRuleModel {
    const id = "supp_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: SupportKnowledgeRuleModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = SupportKnowledgeRuleValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for SupportKnowledgeRule: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): SupportKnowledgeRuleModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: SupportKnowledgeRuleModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<SupportKnowledgeRuleModel>): SupportKnowledgeRuleModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: SupportKnowledgeRuleModel = {
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
