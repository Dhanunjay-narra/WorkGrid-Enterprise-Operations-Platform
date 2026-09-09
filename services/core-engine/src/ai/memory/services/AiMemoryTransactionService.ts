import { AiMemoryTransactionModel, AiMemoryTransactionValidator } from "@nexora/types/domains/ai/memory/AiMemoryTransaction";

export class AiMemoryTransactionService {
  private repository = new Map<string, AiMemoryTransactionModel>();

  public create(data: Omit<AiMemoryTransactionModel, "id" | "version" | "createdAt" | "updatedAt">): AiMemoryTransactionModel {
    const id = "ai_m_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: AiMemoryTransactionModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = AiMemoryTransactionValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for AiMemoryTransaction: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): AiMemoryTransactionModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: AiMemoryTransactionModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<AiMemoryTransactionModel>): AiMemoryTransactionModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: AiMemoryTransactionModel = {
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
