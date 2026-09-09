import { AiAgentsSessionModel, AiAgentsSessionValidator } from "@nexora/types/domains/ai/agents/AiAgentsSession";

export class AiAgentsSessionService {
  private repository = new Map<string, AiAgentsSessionModel>();

  public create(data: Omit<AiAgentsSessionModel, "id" | "version" | "createdAt" | "updatedAt">): AiAgentsSessionModel {
    const id = "ai_a_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: AiAgentsSessionModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = AiAgentsSessionValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for AiAgentsSession: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): AiAgentsSessionModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: AiAgentsSessionModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<AiAgentsSessionModel>): AiAgentsSessionModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: AiAgentsSessionModel = {
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
