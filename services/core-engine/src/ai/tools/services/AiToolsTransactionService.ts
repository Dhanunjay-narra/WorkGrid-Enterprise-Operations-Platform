import { AiToolsTransactionModel, AiToolsTransactionValidator } from "@nexora/types/domains/ai/tools/AiToolsTransaction";

export class AiToolsTransactionService {
  private repository = new Map<string, AiToolsTransactionModel>();

  public create(data: Omit<AiToolsTransactionModel, "id" | "version" | "createdAt" | "updatedAt">): AiToolsTransactionModel {
    const id = "ai_t_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: AiToolsTransactionModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = AiToolsTransactionValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for AiToolsTransaction: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): AiToolsTransactionModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: AiToolsTransactionModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<AiToolsTransactionModel>): AiToolsTransactionModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: AiToolsTransactionModel = {
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
