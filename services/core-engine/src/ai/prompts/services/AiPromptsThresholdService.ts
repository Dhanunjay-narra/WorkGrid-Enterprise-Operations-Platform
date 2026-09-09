import { AiPromptsThresholdModel, AiPromptsThresholdValidator } from "@nexora/types/domains/ai/prompts/AiPromptsThreshold";

export class AiPromptsThresholdService {
  private repository = new Map<string, AiPromptsThresholdModel>();

  public create(data: Omit<AiPromptsThresholdModel, "id" | "version" | "createdAt" | "updatedAt">): AiPromptsThresholdModel {
    const id = "ai_p_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: AiPromptsThresholdModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = AiPromptsThresholdValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for AiPromptsThreshold: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): AiPromptsThresholdModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: AiPromptsThresholdModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<AiPromptsThresholdModel>): AiPromptsThresholdModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: AiPromptsThresholdModel = {
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
