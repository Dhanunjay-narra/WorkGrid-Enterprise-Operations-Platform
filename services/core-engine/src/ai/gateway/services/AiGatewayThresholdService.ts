import { AiGatewayThresholdModel, AiGatewayThresholdValidator } from "@nexora/types/domains/ai/gateway/AiGatewayThreshold";

export class AiGatewayThresholdService {
  private repository = new Map<string, AiGatewayThresholdModel>();

  public create(data: Omit<AiGatewayThresholdModel, "id" | "version" | "createdAt" | "updatedAt">): AiGatewayThresholdModel {
    const id = "ai_g_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: AiGatewayThresholdModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = AiGatewayThresholdValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for AiGatewayThreshold: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): AiGatewayThresholdModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: AiGatewayThresholdModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<AiGatewayThresholdModel>): AiGatewayThresholdModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: AiGatewayThresholdModel = {
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
