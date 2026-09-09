import { AiGatewayQueueModel, AiGatewayQueueValidator } from "@nexora/types/domains/ai/gateway/AiGatewayQueue";

export class AiGatewayQueueService {
  private repository = new Map<string, AiGatewayQueueModel>();

  public create(data: Omit<AiGatewayQueueModel, "id" | "version" | "createdAt" | "updatedAt">): AiGatewayQueueModel {
    const id = "ai_g_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: AiGatewayQueueModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = AiGatewayQueueValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for AiGatewayQueue: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): AiGatewayQueueModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: AiGatewayQueueModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<AiGatewayQueueModel>): AiGatewayQueueModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: AiGatewayQueueModel = {
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
