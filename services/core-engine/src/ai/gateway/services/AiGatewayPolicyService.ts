import { AiGatewayPolicyModel, AiGatewayPolicyValidator } from "@nexora/types/domains/ai/gateway/AiGatewayPolicy";

export class AiGatewayPolicyService {
  private repository = new Map<string, AiGatewayPolicyModel>();

  public create(data: Omit<AiGatewayPolicyModel, "id" | "version" | "createdAt" | "updatedAt">): AiGatewayPolicyModel {
    const id = "ai_g_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: AiGatewayPolicyModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = AiGatewayPolicyValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for AiGatewayPolicy: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): AiGatewayPolicyModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: AiGatewayPolicyModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<AiGatewayPolicyModel>): AiGatewayPolicyModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: AiGatewayPolicyModel = {
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
