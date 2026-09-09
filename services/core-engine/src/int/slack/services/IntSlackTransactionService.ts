import { IntSlackTransactionModel, IntSlackTransactionValidator } from "@nexora/types/domains/int/slack/IntSlackTransaction";

export class IntSlackTransactionService {
  private repository = new Map<string, IntSlackTransactionModel>();

  public create(data: Omit<IntSlackTransactionModel, "id" | "version" | "createdAt" | "updatedAt">): IntSlackTransactionModel {
    const id = "int__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: IntSlackTransactionModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = IntSlackTransactionValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for IntSlackTransaction: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): IntSlackTransactionModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: IntSlackTransactionModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<IntSlackTransactionModel>): IntSlackTransactionModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: IntSlackTransactionModel = {
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
