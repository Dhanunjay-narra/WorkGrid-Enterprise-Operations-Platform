import { IdentityTransactionModel, IdentityTransactionValidator } from "@nexora/types/domains/identity/IdentityTransaction";

export class IdentityTransactionService {
  private repository = new Map<string, IdentityTransactionModel>();

  public create(data: Omit<IdentityTransactionModel, "id" | "version" | "createdAt" | "updatedAt">): IdentityTransactionModel {
    const id = "iden_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: IdentityTransactionModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = IdentityTransactionValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for IdentityTransaction: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): IdentityTransactionModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: IdentityTransactionModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<IdentityTransactionModel>): IdentityTransactionModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: IdentityTransactionModel = {
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
