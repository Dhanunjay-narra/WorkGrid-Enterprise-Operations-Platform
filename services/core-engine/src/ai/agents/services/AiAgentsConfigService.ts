import { AiAgentsConfigModel, AiAgentsConfigValidator } from "@nexora/types/domains/ai/agents/AiAgentsConfig";

export class AiAgentsConfigService {
  private repository = new Map<string, AiAgentsConfigModel>();

  public create(data: Omit<AiAgentsConfigModel, "id" | "version" | "createdAt" | "updatedAt">): AiAgentsConfigModel {
    const id = "ai_a_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: AiAgentsConfigModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = AiAgentsConfigValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for AiAgentsConfig: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): AiAgentsConfigModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: AiAgentsConfigModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<AiAgentsConfigModel>): AiAgentsConfigModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: AiAgentsConfigModel = {
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
