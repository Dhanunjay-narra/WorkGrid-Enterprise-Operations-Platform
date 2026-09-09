import { AiRagSessionModel, AiRagSessionValidator } from "@nexora/types/domains/ai/rag/AiRagSession";

export class AiRagSessionService {
  private repository = new Map<string, AiRagSessionModel>();

  public create(data: Omit<AiRagSessionModel, "id" | "version" | "createdAt" | "updatedAt">): AiRagSessionModel {
    const id = "ai_r_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: AiRagSessionModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = AiRagSessionValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for AiRagSession: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): AiRagSessionModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: AiRagSessionModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<AiRagSessionModel>): AiRagSessionModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: AiRagSessionModel = {
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
