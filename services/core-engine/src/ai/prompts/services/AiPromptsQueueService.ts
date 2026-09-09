import { AiPromptsQueueModel, AiPromptsQueueValidator } from "@nexora/types/domains/ai/prompts/AiPromptsQueue";

export class AiPromptsQueueService {
  private repository = new Map<string, AiPromptsQueueModel>();

  public create(data: Omit<AiPromptsQueueModel, "id" | "version" | "createdAt" | "updatedAt">): AiPromptsQueueModel {
    const id = "ai_p_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: AiPromptsQueueModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = AiPromptsQueueValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for AiPromptsQueue: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): AiPromptsQueueModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: AiPromptsQueueModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<AiPromptsQueueModel>): AiPromptsQueueModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: AiPromptsQueueModel = {
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
