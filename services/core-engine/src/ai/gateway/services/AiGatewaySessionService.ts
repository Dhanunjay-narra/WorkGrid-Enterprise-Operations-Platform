import { AiGatewaySessionModel, AiGatewaySessionValidator } from "@nexora/types/domains/ai/gateway/AiGatewaySession";

export class AiGatewaySessionService {
  private repository = new Map<string, AiGatewaySessionModel>();

  public create(data: Omit<AiGatewaySessionModel, "id" | "version" | "createdAt" | "updatedAt">): AiGatewaySessionModel {
    const id = "ai_g_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: AiGatewaySessionModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = AiGatewaySessionValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for AiGatewaySession: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): AiGatewaySessionModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: AiGatewaySessionModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<AiGatewaySessionModel>): AiGatewaySessionModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: AiGatewaySessionModel = {
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
