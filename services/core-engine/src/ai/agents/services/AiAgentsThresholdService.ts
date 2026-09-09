import { AiAgentsThresholdModel, AiAgentsThresholdValidator } from "@nexora/types/domains/ai/agents/AiAgentsThreshold";

export class AiAgentsThresholdService {
  private repository = new Map<string, AiAgentsThresholdModel>();

  public create(data: Omit<AiAgentsThresholdModel, "id" | "version" | "createdAt" | "updatedAt">): AiAgentsThresholdModel {
    const id = "ai_a_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: AiAgentsThresholdModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = AiAgentsThresholdValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for AiAgentsThreshold: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): AiAgentsThresholdModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: AiAgentsThresholdModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<AiAgentsThresholdModel>): AiAgentsThresholdModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: AiAgentsThresholdModel = {
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
