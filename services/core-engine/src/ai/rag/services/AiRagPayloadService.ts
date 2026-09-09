import { AiRagPayloadModel, AiRagPayloadValidator } from "@nexora/types/domains/ai/rag/AiRagPayload";

export class AiRagPayloadService {
  private repository = new Map<string, AiRagPayloadModel>();

  public create(data: Omit<AiRagPayloadModel, "id" | "version" | "createdAt" | "updatedAt">): AiRagPayloadModel {
    const id = "ai_r_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: AiRagPayloadModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = AiRagPayloadValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for AiRagPayload: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): AiRagPayloadModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: AiRagPayloadModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<AiRagPayloadModel>): AiRagPayloadModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: AiRagPayloadModel = {
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
