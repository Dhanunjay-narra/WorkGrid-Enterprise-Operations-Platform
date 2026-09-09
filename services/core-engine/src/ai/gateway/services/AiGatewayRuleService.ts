import { AiGatewayRuleModel, AiGatewayRuleValidator } from "@nexora/types/domains/ai/gateway/AiGatewayRule";

export class AiGatewayRuleService {
  private repository = new Map<string, AiGatewayRuleModel>();

  public create(data: Omit<AiGatewayRuleModel, "id" | "version" | "createdAt" | "updatedAt">): AiGatewayRuleModel {
    const id = "ai_g_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: AiGatewayRuleModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = AiGatewayRuleValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for AiGatewayRule: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): AiGatewayRuleModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: AiGatewayRuleModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<AiGatewayRuleModel>): AiGatewayRuleModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: AiGatewayRuleModel = {
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
