import { AiAgentsBatchModel, AiAgentsBatchValidator } from "@nexora/types/domains/ai/agents/AiAgentsBatch";

export class AiAgentsBatchService {
  private repository = new Map<string, AiAgentsBatchModel>();

  public create(data: Omit<AiAgentsBatchModel, "id" | "version" | "createdAt" | "updatedAt">): AiAgentsBatchModel {
    const id = "ai_a_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: AiAgentsBatchModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = AiAgentsBatchValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for AiAgentsBatch: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): AiAgentsBatchModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: AiAgentsBatchModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<AiAgentsBatchModel>): AiAgentsBatchModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: AiAgentsBatchModel = {
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
