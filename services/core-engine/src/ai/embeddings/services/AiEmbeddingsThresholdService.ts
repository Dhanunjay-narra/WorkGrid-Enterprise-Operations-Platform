import { AiEmbeddingsThresholdModel, AiEmbeddingsThresholdValidator } from "@nexora/types/domains/ai/embeddings/AiEmbeddingsThreshold";

export class AiEmbeddingsThresholdService {
  private repository = new Map<string, AiEmbeddingsThresholdModel>();

  public create(data: Omit<AiEmbeddingsThresholdModel, "id" | "version" | "createdAt" | "updatedAt">): AiEmbeddingsThresholdModel {
    const id = "ai_e_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: AiEmbeddingsThresholdModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = AiEmbeddingsThresholdValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for AiEmbeddingsThreshold: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): AiEmbeddingsThresholdModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: AiEmbeddingsThresholdModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<AiEmbeddingsThresholdModel>): AiEmbeddingsThresholdModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: AiEmbeddingsThresholdModel = {
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
