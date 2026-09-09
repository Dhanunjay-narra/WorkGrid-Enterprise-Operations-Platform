import { AiGatewayNodeModel, AiGatewayNodeValidator } from "@nexora/types/domains/ai/gateway/AiGatewayNode";

export class AiGatewayNodeService {
  private repository = new Map<string, AiGatewayNodeModel>();

  public create(data: Omit<AiGatewayNodeModel, "id" | "version" | "createdAt" | "updatedAt">): AiGatewayNodeModel {
    const id = "ai_g_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: AiGatewayNodeModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = AiGatewayNodeValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for AiGatewayNode: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): AiGatewayNodeModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: AiGatewayNodeModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<AiGatewayNodeModel>): AiGatewayNodeModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: AiGatewayNodeModel = {
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
