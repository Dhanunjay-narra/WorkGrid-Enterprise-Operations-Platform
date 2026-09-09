import { AiAgentsQueueModel, AiAgentsQueueValidator } from "@nexora/types/domains/ai/agents/AiAgentsQueue";

export class AiAgentsQueueService {
  private repository = new Map<string, AiAgentsQueueModel>();

  public create(data: Omit<AiAgentsQueueModel, "id" | "version" | "createdAt" | "updatedAt">): AiAgentsQueueModel {
    const id = "ai_a_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: AiAgentsQueueModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = AiAgentsQueueValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for AiAgentsQueue: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): AiAgentsQueueModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: AiAgentsQueueModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<AiAgentsQueueModel>): AiAgentsQueueModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: AiAgentsQueueModel = {
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
