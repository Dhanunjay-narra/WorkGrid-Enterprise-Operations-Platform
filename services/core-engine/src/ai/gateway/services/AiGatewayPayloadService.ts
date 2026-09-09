import { AiGatewayPayloadModel, AiGatewayPayloadValidator } from "@nexora/types/domains/ai/gateway/AiGatewayPayload";

export class AiGatewayPayloadService {
  private repository = new Map<string, AiGatewayPayloadModel>();

  public create(data: Omit<AiGatewayPayloadModel, "id" | "version" | "createdAt" | "updatedAt">): AiGatewayPayloadModel {
    const id = "ai_g_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: AiGatewayPayloadModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = AiGatewayPayloadValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for AiGatewayPayload: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): AiGatewayPayloadModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: AiGatewayPayloadModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<AiGatewayPayloadModel>): AiGatewayPayloadModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: AiGatewayPayloadModel = {
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
