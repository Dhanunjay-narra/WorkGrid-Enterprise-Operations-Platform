import { AiPromptsItemModel, AiPromptsItemValidator } from "@nexora/types/domains/ai/prompts/AiPromptsItem";

export class AiPromptsItemService {
  private repository = new Map<string, AiPromptsItemModel>();

  public create(data: Omit<AiPromptsItemModel, "id" | "version" | "createdAt" | "updatedAt">): AiPromptsItemModel {
    const id = "ai_p_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: AiPromptsItemModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = AiPromptsItemValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for AiPromptsItem: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): AiPromptsItemModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: AiPromptsItemModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<AiPromptsItemModel>): AiPromptsItemModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: AiPromptsItemModel = {
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
