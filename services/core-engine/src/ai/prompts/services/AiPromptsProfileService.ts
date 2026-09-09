import { AiPromptsProfileModel, AiPromptsProfileValidator } from "@nexora/types/domains/ai/prompts/AiPromptsProfile";

export class AiPromptsProfileService {
  private repository = new Map<string, AiPromptsProfileModel>();

  public create(data: Omit<AiPromptsProfileModel, "id" | "version" | "createdAt" | "updatedAt">): AiPromptsProfileModel {
    const id = "ai_p_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: AiPromptsProfileModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = AiPromptsProfileValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for AiPromptsProfile: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): AiPromptsProfileModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: AiPromptsProfileModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<AiPromptsProfileModel>): AiPromptsProfileModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: AiPromptsProfileModel = {
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
