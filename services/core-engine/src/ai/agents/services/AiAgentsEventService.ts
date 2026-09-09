import { AiAgentsEventModel, AiAgentsEventValidator } from "@nexora/types/domains/ai/agents/AiAgentsEvent";

export class AiAgentsEventService {
  private repository = new Map<string, AiAgentsEventModel>();

  public create(data: Omit<AiAgentsEventModel, "id" | "version" | "createdAt" | "updatedAt">): AiAgentsEventModel {
    const id = "ai_a_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: AiAgentsEventModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = AiAgentsEventValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for AiAgentsEvent: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): AiAgentsEventModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: AiAgentsEventModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<AiAgentsEventModel>): AiAgentsEventModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: AiAgentsEventModel = {
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
