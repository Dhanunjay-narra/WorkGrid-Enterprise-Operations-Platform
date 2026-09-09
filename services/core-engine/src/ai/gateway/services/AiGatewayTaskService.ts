import { AiGatewayTaskModel, AiGatewayTaskValidator } from "@nexora/types/domains/ai/gateway/AiGatewayTask";

export class AiGatewayTaskService {
  private repository = new Map<string, AiGatewayTaskModel>();

  public create(data: Omit<AiGatewayTaskModel, "id" | "version" | "createdAt" | "updatedAt">): AiGatewayTaskModel {
    const id = "ai_g_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: AiGatewayTaskModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = AiGatewayTaskValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for AiGatewayTask: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): AiGatewayTaskModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: AiGatewayTaskModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<AiGatewayTaskModel>): AiGatewayTaskModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: AiGatewayTaskModel = {
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
