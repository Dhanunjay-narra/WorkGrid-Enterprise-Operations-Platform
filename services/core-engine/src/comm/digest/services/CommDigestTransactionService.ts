import { CommDigestTransactionModel, CommDigestTransactionValidator } from "@nexora/types/domains/comm/digest/CommDigestTransaction";

export class CommDigestTransactionService {
  private repository = new Map<string, CommDigestTransactionModel>();

  public create(data: Omit<CommDigestTransactionModel, "id" | "version" | "createdAt" | "updatedAt">): CommDigestTransactionModel {
    const id = "comm_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: CommDigestTransactionModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = CommDigestTransactionValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for CommDigestTransaction: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): CommDigestTransactionModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: CommDigestTransactionModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<CommDigestTransactionModel>): CommDigestTransactionModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: CommDigestTransactionModel = {
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
