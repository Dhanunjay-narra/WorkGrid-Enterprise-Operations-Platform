import { AiEmbeddingsMappingModel, AiEmbeddingsMappingValidator } from "@nexora/types/domains/ai/embeddings/AiEmbeddingsMapping";

export class AiEmbeddingsMappingService {
  private repository = new Map<string, AiEmbeddingsMappingModel>();

  public create(data: Omit<AiEmbeddingsMappingModel, "id" | "version" | "createdAt" | "updatedAt">): AiEmbeddingsMappingModel {
    const id = "ai_e_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: AiEmbeddingsMappingModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = AiEmbeddingsMappingValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for AiEmbeddingsMapping: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): AiEmbeddingsMappingModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: AiEmbeddingsMappingModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<AiEmbeddingsMappingModel>): AiEmbeddingsMappingModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: AiEmbeddingsMappingModel = {
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
