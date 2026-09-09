import { AiAgentsMetricModel, AiAgentsMetricValidator } from "@nexora/types/domains/ai/agents/AiAgentsMetric";

export class AiAgentsMetricService {
  private repository = new Map<string, AiAgentsMetricModel>();

  public create(data: Omit<AiAgentsMetricModel, "id" | "version" | "createdAt" | "updatedAt">): AiAgentsMetricModel {
    const id = "ai_a_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: AiAgentsMetricModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = AiAgentsMetricValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for AiAgentsMetric: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): AiAgentsMetricModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: AiAgentsMetricModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<AiAgentsMetricModel>): AiAgentsMetricModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: AiAgentsMetricModel = {
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
