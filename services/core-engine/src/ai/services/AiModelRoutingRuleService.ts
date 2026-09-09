import { AiModelRoutingRuleData, AiModelRoutingRuleValidator } from "../../../../packages/types/src/domains/ai/AiModelRoutingRule";

export class AiModelRoutingRuleService {
  private repository = new Map<string, AiModelRoutingRuleData>();

  public create(data: Omit<AiModelRoutingRuleData, "id" | "createdAt" | "updatedAt">): AiModelRoutingRuleData {
    const id = "ai_" + Math.random().toString(36).substring(2, 9);
    const now = new Date().toISOString();
    const item: AiModelRoutingRuleData = {
      ...data,
      id,
      createdAt: now,
      updatedAt: now
    };
    const validation = AiModelRoutingRuleValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for AiModelRoutingRule: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): AiModelRoutingRuleData | undefined {
    return this.repository.get(id);
  }

  public listByTenant(tenantId: string): AiModelRoutingRuleData[] {
    return Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
  }

  public update(id: string, updates: Partial<AiModelRoutingRuleData>): AiModelRoutingRuleData | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: AiModelRoutingRuleData = { ...existing, ...updates, updatedAt: new Date().toISOString() };
    this.repository.set(id, updated);
    return updated;
  }

  public delete(id: string): boolean {
    return this.repository.delete(id);
  }
}
