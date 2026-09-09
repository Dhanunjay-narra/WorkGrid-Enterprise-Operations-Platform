import { FinPaymentTransactionData, FinPaymentTransactionValidator } from "../../../../packages/types/src/domains/finance/FinPaymentTransaction";

export class FinPaymentTransactionService {
  private repository = new Map<string, FinPaymentTransactionData>();

  public create(data: Omit<FinPaymentTransactionData, "id" | "createdAt" | "updatedAt">): FinPaymentTransactionData {
    const id = "fin_" + Math.random().toString(36).substring(2, 9);
    const now = new Date().toISOString();
    const item: FinPaymentTransactionData = {
      ...data,
      id,
      createdAt: now,
      updatedAt: now
    };
    const validation = FinPaymentTransactionValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for FinPaymentTransaction: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): FinPaymentTransactionData | undefined {
    return this.repository.get(id);
  }

  public listByTenant(tenantId: string): FinPaymentTransactionData[] {
    return Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
  }

  public update(id: string, updates: Partial<FinPaymentTransactionData>): FinPaymentTransactionData | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: FinPaymentTransactionData = { ...existing, ...updates, updatedAt: new Date().toISOString() };
    this.repository.set(id, updated);
    return updated;
  }

  public delete(id: string): boolean {
    return this.repository.delete(id);
  }
}
