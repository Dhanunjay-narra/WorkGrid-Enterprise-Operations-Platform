import { AiAgentsProfileModel, AiAgentsProfileValidator } from "@nexora/types/domains/ai/agents/AiAgentsProfile";

export class AiAgentsProfileService {
  private repository = new Map<string, AiAgentsProfileModel>();

  public create(data: Omit<AiAgentsProfileModel, "id" | "version" | "createdAt" | "updatedAt">): AiAgentsProfileModel {
    const id = "ai_a_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: AiAgentsProfileModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = AiAgentsProfileValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for AiAgentsProfile: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): AiAgentsProfileModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: AiAgentsProfileModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<AiAgentsProfileModel>): AiAgentsProfileModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: AiAgentsProfileModel = {
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
