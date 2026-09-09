import { SupportAgentsRuleModel, SupportAgentsRuleValidator } from "@nexora/types/domains/support/agents/SupportAgentsRule";

export class SupportAgentsRuleService {
  private repository = new Map<string, SupportAgentsRuleModel>();

  public create(data: Omit<SupportAgentsRuleModel, "id" | "version" | "createdAt" | "updatedAt">): SupportAgentsRuleModel {
    const id = "supp_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: SupportAgentsRuleModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = SupportAgentsRuleValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for SupportAgentsRule: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): SupportAgentsRuleModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: SupportAgentsRuleModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<SupportAgentsRuleModel>): SupportAgentsRuleModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: SupportAgentsRuleModel = {
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
