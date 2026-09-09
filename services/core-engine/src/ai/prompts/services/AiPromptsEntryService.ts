import { AiPromptsEntryModel, AiPromptsEntryValidator } from "@nexora/types/domains/ai/prompts/AiPromptsEntry";

export class AiPromptsEntryService {
  private repository = new Map<string, AiPromptsEntryModel>();

  public create(data: Omit<AiPromptsEntryModel, "id" | "version" | "createdAt" | "updatedAt">): AiPromptsEntryModel {
    const id = "ai_p_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: AiPromptsEntryModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = AiPromptsEntryValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for AiPromptsEntry: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): AiPromptsEntryModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: AiPromptsEntryModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<AiPromptsEntryModel>): AiPromptsEntryModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: AiPromptsEntryModel = {
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
