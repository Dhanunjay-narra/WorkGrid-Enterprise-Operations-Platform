import { AiRagEventModel, AiRagEventValidator } from "@nexora/types/domains/ai/rag/AiRagEvent";

export class AiRagEventService {
  private repository = new Map<string, AiRagEventModel>();

  public create(data: Omit<AiRagEventModel, "id" | "version" | "createdAt" | "updatedAt">): AiRagEventModel {
    const id = "ai_r_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: AiRagEventModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = AiRagEventValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for AiRagEvent: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): AiRagEventModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: AiRagEventModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<AiRagEventModel>): AiRagEventModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: AiRagEventModel = {
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
