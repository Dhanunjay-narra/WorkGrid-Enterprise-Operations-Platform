import { AiGatewayStateModel, AiGatewayStateValidator } from "@nexora/types/domains/ai/gateway/AiGatewayState";

export class AiGatewayStateService {
  private repository = new Map<string, AiGatewayStateModel>();

  public create(data: Omit<AiGatewayStateModel, "id" | "version" | "createdAt" | "updatedAt">): AiGatewayStateModel {
    const id = "ai_g_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: AiGatewayStateModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = AiGatewayStateValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for AiGatewayState: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): AiGatewayStateModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: AiGatewayStateModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<AiGatewayStateModel>): AiGatewayStateModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: AiGatewayStateModel = {
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
