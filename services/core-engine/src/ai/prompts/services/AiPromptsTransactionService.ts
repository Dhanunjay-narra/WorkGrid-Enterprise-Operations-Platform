import { AiPromptsTransactionModel, AiPromptsTransactionValidator } from "@nexora/types/domains/ai/prompts/AiPromptsTransaction";

export class AiPromptsTransactionService {
  private repository = new Map<string, AiPromptsTransactionModel>();

  public create(data: Omit<AiPromptsTransactionModel, "id" | "version" | "createdAt" | "updatedAt">): AiPromptsTransactionModel {
    const id = "ai_p_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: AiPromptsTransactionModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = AiPromptsTransactionValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for AiPromptsTransaction: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): AiPromptsTransactionModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: AiPromptsTransactionModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<AiPromptsTransactionModel>): AiPromptsTransactionModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: AiPromptsTransactionModel = {
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
