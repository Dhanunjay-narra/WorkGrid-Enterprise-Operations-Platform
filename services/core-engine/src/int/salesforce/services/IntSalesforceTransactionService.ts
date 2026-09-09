import { IntSalesforceTransactionModel, IntSalesforceTransactionValidator } from "@nexora/types/domains/int/salesforce/IntSalesforceTransaction";

export class IntSalesforceTransactionService {
  private repository = new Map<string, IntSalesforceTransactionModel>();

  public create(data: Omit<IntSalesforceTransactionModel, "id" | "version" | "createdAt" | "updatedAt">): IntSalesforceTransactionModel {
    const id = "int__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: IntSalesforceTransactionModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = IntSalesforceTransactionValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for IntSalesforceTransaction: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): IntSalesforceTransactionModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: IntSalesforceTransactionModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<IntSalesforceTransactionModel>): IntSalesforceTransactionModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: IntSalesforceTransactionModel = {
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
