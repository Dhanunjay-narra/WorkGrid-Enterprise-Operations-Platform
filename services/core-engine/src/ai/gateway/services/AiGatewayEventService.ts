import { AiGatewayEventModel, AiGatewayEventValidator } from "@nexora/types/domains/ai/gateway/AiGatewayEvent";

export class AiGatewayEventService {
  private repository = new Map<string, AiGatewayEventModel>();

  public create(data: Omit<AiGatewayEventModel, "id" | "version" | "createdAt" | "updatedAt">): AiGatewayEventModel {
    const id = "ai_g_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: AiGatewayEventModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = AiGatewayEventValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for AiGatewayEvent: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): AiGatewayEventModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: AiGatewayEventModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<AiGatewayEventModel>): AiGatewayEventModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: AiGatewayEventModel = {
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
