import { AiAgentsPayloadModel, AiAgentsPayloadValidator } from "@nexora/types/domains/ai/agents/AiAgentsPayload";

export class AiAgentsPayloadService {
  private repository = new Map<string, AiAgentsPayloadModel>();

  public create(data: Omit<AiAgentsPayloadModel, "id" | "version" | "createdAt" | "updatedAt">): AiAgentsPayloadModel {
    const id = "ai_a_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: AiAgentsPayloadModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = AiAgentsPayloadValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for AiAgentsPayload: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): AiAgentsPayloadModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: AiAgentsPayloadModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<AiAgentsPayloadModel>): AiAgentsPayloadModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: AiAgentsPayloadModel = {
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
