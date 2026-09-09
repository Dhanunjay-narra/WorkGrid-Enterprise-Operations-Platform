import { AiPromptsPolicyModel, AiPromptsPolicyValidator } from "@nexora/types/domains/ai/prompts/AiPromptsPolicy";

export class AiPromptsPolicyService {
  private repository = new Map<string, AiPromptsPolicyModel>();

  public create(data: Omit<AiPromptsPolicyModel, "id" | "version" | "createdAt" | "updatedAt">): AiPromptsPolicyModel {
    const id = "ai_p_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: AiPromptsPolicyModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = AiPromptsPolicyValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for AiPromptsPolicy: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): AiPromptsPolicyModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: AiPromptsPolicyModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<AiPromptsPolicyModel>): AiPromptsPolicyModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: AiPromptsPolicyModel = {
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
