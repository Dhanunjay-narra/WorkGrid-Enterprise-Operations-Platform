import { AiAgentsNodeModel, AiAgentsNodeValidator } from "@nexora/types/domains/ai/agents/AiAgentsNode";

export class AiAgentsNodeService {
  private repository = new Map<string, AiAgentsNodeModel>();

  public create(data: Omit<AiAgentsNodeModel, "id" | "version" | "createdAt" | "updatedAt">): AiAgentsNodeModel {
    const id = "ai_a_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: AiAgentsNodeModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = AiAgentsNodeValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for AiAgentsNode: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): AiAgentsNodeModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: AiAgentsNodeModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<AiAgentsNodeModel>): AiAgentsNodeModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: AiAgentsNodeModel = {
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
