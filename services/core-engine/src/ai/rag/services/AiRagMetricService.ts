import { AiRagMetricModel, AiRagMetricValidator } from "@nexora/types/domains/ai/rag/AiRagMetric";

export class AiRagMetricService {
  private repository = new Map<string, AiRagMetricModel>();

  public create(data: Omit<AiRagMetricModel, "id" | "version" | "createdAt" | "updatedAt">): AiRagMetricModel {
    const id = "ai_r_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: AiRagMetricModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = AiRagMetricValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for AiRagMetric: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): AiRagMetricModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: AiRagMetricModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<AiRagMetricModel>): AiRagMetricModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: AiRagMetricModel = {
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
