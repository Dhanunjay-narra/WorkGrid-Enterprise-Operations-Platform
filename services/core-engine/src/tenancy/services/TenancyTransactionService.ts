import { TenancyTransactionModel, TenancyTransactionValidator } from "@nexora/types/domains/tenancy/TenancyTransaction";

export class TenancyTransactionService {
  private repository = new Map<string, TenancyTransactionModel>();

  public create(data: Omit<TenancyTransactionModel, "id" | "version" | "createdAt" | "updatedAt">): TenancyTransactionModel {
    const id = "tena_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: TenancyTransactionModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = TenancyTransactionValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for TenancyTransaction: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): TenancyTransactionModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: TenancyTransactionModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<TenancyTransactionModel>): TenancyTransactionModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: TenancyTransactionModel = {
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
