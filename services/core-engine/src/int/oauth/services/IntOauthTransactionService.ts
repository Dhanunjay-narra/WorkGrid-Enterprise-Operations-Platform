import { IntOauthTransactionModel, IntOauthTransactionValidator } from "@nexora/types/domains/int/oauth/IntOauthTransaction";

export class IntOauthTransactionService {
  private repository = new Map<string, IntOauthTransactionModel>();

  public create(data: Omit<IntOauthTransactionModel, "id" | "version" | "createdAt" | "updatedAt">): IntOauthTransactionModel {
    const id = "int__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: IntOauthTransactionModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = IntOauthTransactionValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for IntOauthTransaction: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): IntOauthTransactionModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: IntOauthTransactionModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<IntOauthTransactionModel>): IntOauthTransactionModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: IntOauthTransactionModel = {
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
