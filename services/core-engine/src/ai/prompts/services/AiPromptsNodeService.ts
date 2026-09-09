import { AiPromptsNodeModel, AiPromptsNodeValidator } from "@nexora/types/domains/ai/prompts/AiPromptsNode";

export class AiPromptsNodeService {
  private repository = new Map<string, AiPromptsNodeModel>();

  public create(data: Omit<AiPromptsNodeModel, "id" | "version" | "createdAt" | "updatedAt">): AiPromptsNodeModel {
    const id = "ai_p_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: AiPromptsNodeModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = AiPromptsNodeValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for AiPromptsNode: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): AiPromptsNodeModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: AiPromptsNodeModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<AiPromptsNodeModel>): AiPromptsNodeModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: AiPromptsNodeModel = {
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
