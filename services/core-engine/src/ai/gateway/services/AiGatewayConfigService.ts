import { AiGatewayConfigModel, AiGatewayConfigValidator } from "@nexora/types/domains/ai/gateway/AiGatewayConfig";

export class AiGatewayConfigService {
  private repository = new Map<string, AiGatewayConfigModel>();

  public create(data: Omit<AiGatewayConfigModel, "id" | "version" | "createdAt" | "updatedAt">): AiGatewayConfigModel {
    const id = "ai_g_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: AiGatewayConfigModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = AiGatewayConfigValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for AiGatewayConfig: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): AiGatewayConfigModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: AiGatewayConfigModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<AiGatewayConfigModel>): AiGatewayConfigModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: AiGatewayConfigModel = {
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
