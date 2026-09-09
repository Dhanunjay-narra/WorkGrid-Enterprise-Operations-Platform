import { AiMemorySessionModel, AiMemorySessionValidator } from "@nexora/types/domains/ai/memory/AiMemorySession";

export class AiMemorySessionService {
  private repository = new Map<string, AiMemorySessionModel>();

  public create(data: Omit<AiMemorySessionModel, "id" | "version" | "createdAt" | "updatedAt">): AiMemorySessionModel {
    const id = "ai_m_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: AiMemorySessionModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = AiMemorySessionValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for AiMemorySession: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): AiMemorySessionModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: AiMemorySessionModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<AiMemorySessionModel>): AiMemorySessionModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: AiMemorySessionModel = {
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
