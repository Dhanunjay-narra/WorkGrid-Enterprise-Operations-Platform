import { IntStripeTransactionModel, IntStripeTransactionValidator } from "@nexora/types/domains/int/stripe/IntStripeTransaction";

export class IntStripeTransactionService {
  private repository = new Map<string, IntStripeTransactionModel>();

  public create(data: Omit<IntStripeTransactionModel, "id" | "version" | "createdAt" | "updatedAt">): IntStripeTransactionModel {
    const id = "int__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: IntStripeTransactionModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = IntStripeTransactionValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for IntStripeTransaction: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): IntStripeTransactionModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: IntStripeTransactionModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<IntStripeTransactionModel>): IntStripeTransactionModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: IntStripeTransactionModel = {
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
