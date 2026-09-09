import { AiPromptsStateModel, AiPromptsStateValidator } from "@nexora/types/domains/ai/prompts/AiPromptsState";

export class AiPromptsStateService {
  private repository = new Map<string, AiPromptsStateModel>();

  public create(data: Omit<AiPromptsStateModel, "id" | "version" | "createdAt" | "updatedAt">): AiPromptsStateModel {
    const id = "ai_p_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: AiPromptsStateModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = AiPromptsStateValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for AiPromptsState: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): AiPromptsStateModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: AiPromptsStateModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<AiPromptsStateModel>): AiPromptsStateModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: AiPromptsStateModel = {
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
