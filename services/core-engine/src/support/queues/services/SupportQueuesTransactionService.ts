import { SupportQueuesTransactionModel, SupportQueuesTransactionValidator } from "@nexora/types/domains/support/queues/SupportQueuesTransaction";

export class SupportQueuesTransactionService {
  private repository = new Map<string, SupportQueuesTransactionModel>();

  public create(data: Omit<SupportQueuesTransactionModel, "id" | "version" | "createdAt" | "updatedAt">): SupportQueuesTransactionModel {
    const id = "supp_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: SupportQueuesTransactionModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = SupportQueuesTransactionValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for SupportQueuesTransaction: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): SupportQueuesTransactionModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: SupportQueuesTransactionModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<SupportQueuesTransactionModel>): SupportQueuesTransactionModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: SupportQueuesTransactionModel = {
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
