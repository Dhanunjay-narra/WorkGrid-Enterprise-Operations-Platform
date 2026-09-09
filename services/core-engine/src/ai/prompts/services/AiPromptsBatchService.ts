import { AiPromptsBatchModel, AiPromptsBatchValidator } from "@nexora/types/domains/ai/prompts/AiPromptsBatch";

export class AiPromptsBatchService {
  private repository = new Map<string, AiPromptsBatchModel>();

  public create(data: Omit<AiPromptsBatchModel, "id" | "version" | "createdAt" | "updatedAt">): AiPromptsBatchModel {
    const id = "ai_p_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: AiPromptsBatchModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = AiPromptsBatchValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for AiPromptsBatch: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): AiPromptsBatchModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: AiPromptsBatchModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<AiPromptsBatchModel>): AiPromptsBatchModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: AiPromptsBatchModel = {
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
