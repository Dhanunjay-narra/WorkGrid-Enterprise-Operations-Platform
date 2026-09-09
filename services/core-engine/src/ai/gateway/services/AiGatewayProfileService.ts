import { AiGatewayProfileModel, AiGatewayProfileValidator } from "@nexora/types/domains/ai/gateway/AiGatewayProfile";

export class AiGatewayProfileService {
  private repository = new Map<string, AiGatewayProfileModel>();

  public create(data: Omit<AiGatewayProfileModel, "id" | "version" | "createdAt" | "updatedAt">): AiGatewayProfileModel {
    const id = "ai_g_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: AiGatewayProfileModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = AiGatewayProfileValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for AiGatewayProfile: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): AiGatewayProfileModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: AiGatewayProfileModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<AiGatewayProfileModel>): AiGatewayProfileModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: AiGatewayProfileModel = {
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
