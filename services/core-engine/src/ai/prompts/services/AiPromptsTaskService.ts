import { AiPromptsTaskModel, AiPromptsTaskValidator } from "@nexora/types/domains/ai/prompts/AiPromptsTask";

export class AiPromptsTaskService {
  private repository = new Map<string, AiPromptsTaskModel>();

  public create(data: Omit<AiPromptsTaskModel, "id" | "version" | "createdAt" | "updatedAt">): AiPromptsTaskModel {
    const id = "ai_p_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: AiPromptsTaskModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = AiPromptsTaskValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for AiPromptsTask: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): AiPromptsTaskModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: AiPromptsTaskModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<AiPromptsTaskModel>): AiPromptsTaskModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: AiPromptsTaskModel = {
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
