import { AiGatewayMetricModel, AiGatewayMetricValidator } from "@nexora/types/domains/ai/gateway/AiGatewayMetric";

export class AiGatewayMetricService {
  private repository = new Map<string, AiGatewayMetricModel>();

  public create(data: Omit<AiGatewayMetricModel, "id" | "version" | "createdAt" | "updatedAt">): AiGatewayMetricModel {
    const id = "ai_g_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: AiGatewayMetricModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = AiGatewayMetricValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for AiGatewayMetric: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): AiGatewayMetricModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: AiGatewayMetricModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<AiGatewayMetricModel>): AiGatewayMetricModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: AiGatewayMetricModel = {
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
