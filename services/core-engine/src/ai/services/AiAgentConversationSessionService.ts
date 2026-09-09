import { AiAgentConversationSessionData, AiAgentConversationSessionValidator } from "../../../../packages/types/src/domains/ai/AiAgentConversationSession";

export class AiAgentConversationSessionService {
  private repository = new Map<string, AiAgentConversationSessionData>();

  public create(data: Omit<AiAgentConversationSessionData, "id" | "createdAt" | "updatedAt">): AiAgentConversationSessionData {
    const id = "ai_" + Math.random().toString(36).substring(2, 9);
    const now = new Date().toISOString();
    const item: AiAgentConversationSessionData = {
      ...data,
      id,
      createdAt: now,
      updatedAt: now
    };
    const validation = AiAgentConversationSessionValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for AiAgentConversationSession: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): AiAgentConversationSessionData | undefined {
    return this.repository.get(id);
  }

  public listByTenant(tenantId: string): AiAgentConversationSessionData[] {
    return Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
  }

  public update(id: string, updates: Partial<AiAgentConversationSessionData>): AiAgentConversationSessionData | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: AiAgentConversationSessionData = { ...existing, ...updates, updatedAt: new Date().toISOString() };
    this.repository.set(id, updated);
    return updated;
  }

  public delete(id: string): boolean {
    return this.repository.delete(id);
  }
}
