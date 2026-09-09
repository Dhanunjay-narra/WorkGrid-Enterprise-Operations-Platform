import { AiEmbeddingsEntryModel, AiEmbeddingsEntryValidator } from "@nexora/types/domains/ai/embeddings/AiEmbeddingsEntry";

export class AiEmbeddingsEntryService {
  private repository = new Map<string, AiEmbeddingsEntryModel>();

  public create(data: Omit<AiEmbeddingsEntryModel, "id" | "version" | "createdAt" | "updatedAt">): AiEmbeddingsEntryModel {
    const id = "ai_e_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: AiEmbeddingsEntryModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = AiEmbeddingsEntryValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for AiEmbeddingsEntry: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): AiEmbeddingsEntryModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: AiEmbeddingsEntryModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<AiEmbeddingsEntryModel>): AiEmbeddingsEntryModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: AiEmbeddingsEntryModel = {
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
