import { AiToolsMetricModel, AiToolsMetricValidator } from "@nexora/types/domains/ai/tools/AiToolsMetric";

export class AiToolsMetricService {
  private repository = new Map<string, AiToolsMetricModel>();

  public create(data: Omit<AiToolsMetricModel, "id" | "version" | "createdAt" | "updatedAt">): AiToolsMetricModel {
    const id = "ai_t_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: AiToolsMetricModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = AiToolsMetricValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for AiToolsMetric: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): AiToolsMetricModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: AiToolsMetricModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<AiToolsMetricModel>): AiToolsMetricModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: AiToolsMetricModel = {
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
