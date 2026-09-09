import { AuthTransactionModel, AuthTransactionValidator } from "@nexora/types/domains/auth/AuthTransaction";

export class AuthTransactionService {
  private repository = new Map<string, AuthTransactionModel>();

  public create(data: Omit<AuthTransactionModel, "id" | "version" | "createdAt" | "updatedAt">): AuthTransactionModel {
    const id = "auth_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: AuthTransactionModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = AuthTransactionValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for AuthTransaction: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): AuthTransactionModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: AuthTransactionModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<AuthTransactionModel>): AuthTransactionModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: AuthTransactionModel = {
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
