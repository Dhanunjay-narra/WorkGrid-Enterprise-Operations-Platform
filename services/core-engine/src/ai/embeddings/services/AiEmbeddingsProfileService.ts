import { AiEmbeddingsProfileModel, AiEmbeddingsProfileValidator } from "@nexora/types/domains/ai/embeddings/AiEmbeddingsProfile";

export class AiEmbeddingsProfileService {
  private repository = new Map<string, AiEmbeddingsProfileModel>();

  public create(data: Omit<AiEmbeddingsProfileModel, "id" | "version" | "createdAt" | "updatedAt">): AiEmbeddingsProfileModel {
    const id = "ai_e_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: AiEmbeddingsProfileModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = AiEmbeddingsProfileValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for AiEmbeddingsProfile: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): AiEmbeddingsProfileModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: AiEmbeddingsProfileModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<AiEmbeddingsProfileModel>): AiEmbeddingsProfileModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: AiEmbeddingsProfileModel = {
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
