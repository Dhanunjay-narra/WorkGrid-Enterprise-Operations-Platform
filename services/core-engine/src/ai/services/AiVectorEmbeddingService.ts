import { AiVectorEmbeddingData, AiVectorEmbeddingValidator } from "../../../../packages/types/src/domains/ai/AiVectorEmbedding";

export class AiVectorEmbeddingService {
  private repository = new Map<string, AiVectorEmbeddingData>();

  public create(data: Omit<AiVectorEmbeddingData, "id" | "createdAt" | "updatedAt">): AiVectorEmbeddingData {
    const id = "ai_" + Math.random().toString(36).substring(2, 9);
    const now = new Date().toISOString();
    const item: AiVectorEmbeddingData = {
      ...data,
      id,
      createdAt: now,
      updatedAt: now
    };
    const validation = AiVectorEmbeddingValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for AiVectorEmbedding: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): AiVectorEmbeddingData | undefined {
    return this.repository.get(id);
  }

  public listByTenant(tenantId: string): AiVectorEmbeddingData[] {
    return Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
  }

  public update(id: string, updates: Partial<AiVectorEmbeddingData>): AiVectorEmbeddingData | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: AiVectorEmbeddingData = { ...existing, ...updates, updatedAt: new Date().toISOString() };
    this.repository.set(id, updated);
    return updated;
  }

  public delete(id: string): boolean {
    return this.repository.delete(id);
  }
}
