import { AiAgentsMappingModel, AiAgentsMappingValidator } from "@nexora/types/domains/ai/agents/AiAgentsMapping";

export class AiAgentsMappingService {
  private repository = new Map<string, AiAgentsMappingModel>();

  public create(data: Omit<AiAgentsMappingModel, "id" | "version" | "createdAt" | "updatedAt">): AiAgentsMappingModel {
    const id = "ai_a_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: AiAgentsMappingModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = AiAgentsMappingValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for AiAgentsMapping: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): AiAgentsMappingModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: AiAgentsMappingModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<AiAgentsMappingModel>): AiAgentsMappingModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: AiAgentsMappingModel = {
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
