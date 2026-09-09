import { CommCallsTransactionModel, CommCallsTransactionValidator } from "@nexora/types/domains/comm/calls/CommCallsTransaction";

export class CommCallsTransactionService {
  private repository = new Map<string, CommCallsTransactionModel>();

  public create(data: Omit<CommCallsTransactionModel, "id" | "version" | "createdAt" | "updatedAt">): CommCallsTransactionModel {
    const id = "comm_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: CommCallsTransactionModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = CommCallsTransactionValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for CommCallsTransaction: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): CommCallsTransactionModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: CommCallsTransactionModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<CommCallsTransactionModel>): CommCallsTransactionModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: CommCallsTransactionModel = {
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
