import { CrmAccountsTransactionModel, CrmAccountsTransactionValidator } from "@nexora/types/domains/crm/accounts/CrmAccountsTransaction";

export class CrmAccountsTransactionService {
  private repository = new Map<string, CrmAccountsTransactionModel>();

  public create(data: Omit<CrmAccountsTransactionModel, "id" | "version" | "createdAt" | "updatedAt">): CrmAccountsTransactionModel {
    const id = "crm__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: CrmAccountsTransactionModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = CrmAccountsTransactionValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for CrmAccountsTransaction: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): CrmAccountsTransactionModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: CrmAccountsTransactionModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<CrmAccountsTransactionModel>): CrmAccountsTransactionModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: CrmAccountsTransactionModel = {
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
