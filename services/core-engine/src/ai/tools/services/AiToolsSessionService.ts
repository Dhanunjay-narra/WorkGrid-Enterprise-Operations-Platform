import { AiToolsSessionModel, AiToolsSessionValidator } from "@nexora/types/domains/ai/tools/AiToolsSession";

export class AiToolsSessionService {
  private repository = new Map<string, AiToolsSessionModel>();

  public create(data: Omit<AiToolsSessionModel, "id" | "version" | "createdAt" | "updatedAt">): AiToolsSessionModel {
    const id = "ai_t_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: AiToolsSessionModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = AiToolsSessionValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for AiToolsSession: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): AiToolsSessionModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: AiToolsSessionModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<AiToolsSessionModel>): AiToolsSessionModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: AiToolsSessionModel = {
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
